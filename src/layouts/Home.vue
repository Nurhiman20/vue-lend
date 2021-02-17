<template>
  <v-app id="keep">
    <app-sidebar></app-sidebar>
    <v-main class="app-content">
      <div class="px-6 py-6">
        <router-view></router-view>
      </div>
      <v-footer padless fixed color="background darken5">
        <div class="d-flex justify-end pr-12" style="width: 100%">
          <v-switch
            v-model="darkMode"
            inset
            label="Dark theme"
            @change="setDarkTheme"
          ></v-switch>
        </div>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import AppSidebar from '@/components/AppSidebar'

export default {
  components: {
    AppSidebar
  },
  data: () => ({
    darkMode: false
  }),
  methods: {
    setDarkTheme(val) {
      this.$vuetify.theme.dark = val;
      localStorage.setItem('darkTheme', val);
    }
  },
  created() {
    const dark = localStorage.getItem('darkTheme');
    
    if (dark === 'true') {
      this.darkMode = true;
      this.$vuetify.theme.dark = true;
    } else {
      this.darkMode = false;
      this.$vuetify.theme.dark = false;
    }
  }
}
</script>

<style lang="scss">
.app-content {
  position: relative;
  min-height: 100vh;
  background-color: var(--v-background-base);
}
#keep .v-navigation-drawer__border {
  display: none
}
</style>
