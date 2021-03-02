import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: '#09AD14',
        secondary: '#F1C40F',        
        // secondary: '#04C9CF',
        secondary2: '#FE9900',
        secondary3: '#EF3653',
        accent: '#FFFFFF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#F1F2F7',
        background2: '#B9BABF'
      },
      dark: {
        primary: '#09AD14',
        secondary: '#F1C40F',  
        secondary2: '#FE9900',
        secondary3: '#EF3653',
        accent: '#574EC1',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#000000',
        background2: '#1E1E1E'
      }
    },
    options: {
      customProperties: true
    }
  }
});
