
import { createApp } from 'vue'
import App from './App.vue'
// import { BootstrapVue3 } from 'bootstrap-vue-3'
const cssFiles = import.meta.glob('@/assets/css/*.css', { eager: true });
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import '@/assets/slick-master/slick/slick.css';
import '@/assets/slick-master/slick/slick-theme.css';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick-theme.css';
import '@/assets/css/article.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
// import '@/assets/data/locations.js';


import router from './router'

const app = createApp(App)
// app.use(BootstrapVue3);
app.use(router);
// app.use(bootstrap);
app.mount('#app');
