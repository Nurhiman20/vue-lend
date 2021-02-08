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
        primary: '#8C37F0',
        secondary: '#FB7A66',
        accent: '#FFFFFF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#FBFAFE'
      },
      dark: {
        primary: '#FFFFFF',
        secondary: '#FB7A66',
        accent: '#8C37F0',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#00000'
      }
    }
  }
});
