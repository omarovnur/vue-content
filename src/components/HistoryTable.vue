<template>
    <table>
        <thead>
          <tr>
            <th>#</th>
            <th>{{'Table_sum' | localize}}</th>
            <th>{{'Table_date' | localize}}</th>
            <th>{{'Table_cat' | localize}}</th>
            <th>{{'Table_type' | localize}}</th>
            <th>{{'Table_open' | localize}}</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(record, idx) in records" :key="record.id">
            <td>{{ idx + 1}}</td>
            <td>{{record.amount | currency('KZT')}}</td>
            <td>{{record.date | date('datetime')}}</td>
            <td>{{record.categoryName}}</td>
            <td>
              <span 
                :class="[record.typeClass]"
                class="white-text badge">{{record.typeText}}</span>
            </td>
            <td>
              <button
                  v-tooltip="'Посмотреть запись'" 
                  class="btn-small btn" 
                  @click="$router.push('/detail-record/' + record.id)">
                <i class="material-icons">open_in_new</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
</template>
<script>
export default {
    props:{
      records: {
        required: true,
        type: Array
      }
    },
}
</script>