import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import NutCat from "@nutui/nutui-cat";
import "@nutui/nutui-cat/dist/nutui-cat.css";
createApp(App).use(NutCat).mount("#app");
