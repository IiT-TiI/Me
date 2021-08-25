import dt from "./dataOperations.js"

dt.init_data()
document.querySelector('.add').addEventListener('click', add)

function add(){
    dt.insert_item({},2)
    dt.init_data()
}


import "./lib/practice.scss";
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'


const app = createApp(App)
app.use(router)
app.mount('#app')

