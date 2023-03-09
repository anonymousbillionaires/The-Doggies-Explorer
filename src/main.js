import { createApp } from "vue";
import App from "./App.vue";
import BootstrapVue3 from "bootstrap-vue-3";
import titleMixin from './mixins/titleMixin'

import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "./assets/main.scss";
const app = createApp(App);
app.use(BootstrapVue3);
app.mixin(titleMixin)
app.mount("#app");