import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import Paginate from 'vuejs-paginate'
// import 'materialize-css/dist/js/materialize.min'



import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('localize', localizeFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)


// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBY8kzCT7aaNEOz6K4IZPWTa_KgAh4uhV8",
  authDomain: "vue-content.firebaseapp.com",
  projectId: "vue-content",
  storageBucket: "vue-content.appspot.com",
  messagingSenderId: "463953600292",
  appId: "1:463953600292:web:40407489d0e10a6eb51db1",
  measurementId: "G-1X8BRJ9R0K"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

})


