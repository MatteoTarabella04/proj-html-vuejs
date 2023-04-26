import { createApp } from 'vue'
import './assets/scss/App.scss'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '/node_modules/@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '/node_modules/@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '/node_modules/@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faTwitter, faFacebookF, faPinterestP, faMagnifyingGlass)

createApp(App)
   .component('font-awesome-icon', FontAwesomeIcon)
   .mount('#app')
