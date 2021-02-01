
import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import vueJsonEditor from 'vue-json-editor'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'




library.add(faInfoCircle, faChevronDown)


const app = createApp(App)
app.use(VueAxios, axios)

app.component('vue-json-editor', vueJsonEditor)
app.component('font-awesome-icon', FontAwesomeIcon)



app.config.productionTip = false

app.mount('#app')




