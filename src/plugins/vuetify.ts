import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import '../assets/styles/main.scss'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

export default vuetify
