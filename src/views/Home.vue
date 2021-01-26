<template>
  <div>
    <div class="page-title">
      <h3>{{'Home_bill' | localize}}</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading"/>

    <div v-else class="row">
      
      <HomeBill
        :rates="currency.rates"
      />
      <HomeCurrency
      :rates="currency.rates"
      :date="currency.date"
      />

      
    </div>
  </div>
</template>
<script>
import HomeBill from '@/components/HomeBill'
import HomeCurrency from '@/components/HomeCurrency'

export default {
  name: 'home',
  data:() => ({
    loading: true,
    currency: null
  }),
  async mounted(){
    this.currency = await this.$store.dispatch('fetchCurrency')
    this.loading = false
  },
  methods:{
    async getData(){
        var requestOptions = {
        'method': 'GET',
        'Content-Type': 'application/json',
      };
        var lab
     lab = await fetch("https://reqres.in/api/register", requestOptions)
    //  lab = await fetch("http://localhost:10000/", requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));
        console.log(lab)
    },
     async refresh(){
      this.loading = true
      this.currency = await this.$store.dispatch('fetchCurrency')
      this.loading = false
    }
  },
  components:{
    HomeBill,
    HomeCurrency,
   
  }
}
</script>


