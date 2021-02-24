<template>
  <v-app id="keep">
    <app-header @hide="hideDrawer" :drawer="drawer" v-if="$vuetify.breakpoint.smAndDown"></app-header>
    <app-sidebar :drawer="drawer"></app-sidebar>
    <v-main class="app-content pb-12">
      <div class="px-6 pt-6 pb-12">
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
import AppSidebar from '@/components/AppSidebar';
import AppHeader from '@/components/AppHeader';

export default {
  components: {
    AppSidebar,
    AppHeader
  },
  data: () => ({
    darkMode: false,
    drawer: true
  }),
  methods: {
    setDarkTheme(val) {
      this.$vuetify.theme.dark = val;
      localStorage.setItem('darkTheme', val);
    },
    hideDrawer() {
      this.drawer = !this.drawer
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
