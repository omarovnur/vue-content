<template>
  <div>
    <div class="page-title">
      <h3>{{ 'New_record' | localize }}</h3>
    </div>
    <Loader v-if="loading" />
    <p class="center" v-else-if="!categories.length">
      Категории пока нет.
      <router-link to="/categories">Добавить новую категорию</router-link>
    </p>
    <form class="form" v-else @submit.prevent="handleSubmit" @click="onUpload">
      <div class="input-field">
        <select ref="select" v-model="category">
          <option v-for="c in categories" :key="c.id" :value="c.id">
            {{ c.title }}
          </option>
        </select>
        <label>{{ 'Change_cat' | localize }}</label>
      </div>

      <p>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            value="income"
            v-model="type"
          />
          <span>{{ 'Rec_income' | localize }}</span>
        </label>
      </p>

      <p>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            value="outcome"
            v-model="type"
          />
          <span>{{ 'Rec_outcome' | localize }}</span>
        </label>
      </p>

      <div class="input-field">
        <input
          id="amount"
          type="number"
          v-model.number="amount"
          :class="{
            invalid:
              $v.amount.$dirty && !$v.amount.minValue && !$v.amount.required,
          }"
        />
        <label for="amount">{{ 'Table_sum' | localize }}</label>
        <span
          v-if="$v.amount.$dirty && !$v.amount.minValue && !$v.amount.required"
          class="helper-text invalid"
          >{{ 'MinValue' | localize }}
          {{ $v.amount.$params.minValue.min }}</span
        >
      </div>
      <div class="file-field input-field">
        <div class="btn">
          <span>Файл</span>
          <input type="file" multiple @change="onFileChanged"/>
        </div>
        <div class="file-path-wrapper">
          <input
            class="file-path validate"
            type="text"
            placeholder="Загрузить файл"
          />
        </div>
      </div>

      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model="description"
          :class="{
            invalid: $v.description.$dirty && !$v.description.required,
          }"
        />
        <label for="description">{{ 'Description' | localize }}</label>
        <span
          v-if="$v.description.$dirty && !$v.description.required"
          class="helper-text invalid"
          >{{ 'En_description' | localize }}</span
        >
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        {{ 'Create' | localize }}
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>
<script>
import { required, minValue } from 'vuelidate/lib/validators'
import M from 'materialize-css/dist/js/materialize.min'
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'record',
  data: () => ({
    loading: true,
    categories: [],
    select: null,
    category: null,
    type: 'outcome',
    amount: 1,
    description: '',
    selectedFile: null
  }),
  validations: {
    amount: { minValue: minValue(1) },
    description: { required },
  },
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories')
    this.loading = false

    if (this.categories.length) {
      this.category = this.categories[0].id
    }
    setTimeout(() => {
      this.select = M.FormSelect.init(this.$refs.select)
      M.updateTextFields()
    }, 0)
  },
  computed: {
    ...mapGetters(['info']),
    canCreateRecord() {
      if (this.type === 'income') {
        return true
      }

      return this.info.bill >= this.amount
    },
  },
  methods: {
    async onFileChanged(event){
       this.selectedFile = event.target.files[0]
    },
    onUpload() {
        const formData = new FormData()
       formData.append('myFile', this.selectedFile, this.selectedFile.name)
       axios.post('gs://vue-content.appspot.com', formData)
    },
    async handleSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      if (this.canCreateRecord) {
        try {
          await this.$store.dispatch('createRecord', {
            categoryId: this.category,
            amount: this.amount,
            description: this.description,
            type: this.type,
            date: new Date().toJSON(),
            file: this.file
          })
          const bill =
            this.type === 'income'
              ? this.info.bill + this.amount
              : this.info.bill - this.amount

          await this.$store.dispatch('updateInfo', { bill })
          this.$message('Запись успешна создана')
          this.$v.$reset()
          this.amount = 1
          this.description = ''
          
        } catch (error) {
          ('')
        }
      } else {
        this.$message(
          `Недостаточно средств на счете (${this.amount - this.info.bill})`
        )
      }
    },
  },
  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy()
    }
  },
}
</script>