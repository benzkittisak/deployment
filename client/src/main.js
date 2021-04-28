import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import router from './router'
import swal from 'vue-sweetalert2';

const options = {
    confirmButtonColor: '#62b5c5',
    cancelButtonColor: '#ff7674',
  };

createApp(App).use(router).use(swal,options).mount('#app')
