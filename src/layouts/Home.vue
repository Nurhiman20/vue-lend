<template>
  <v-app id="keep">
    <app-sidebar :drawer="drawer"></app-sidebar>
    <v-main class="app-content">
      <div class="pa-6 mb-10">
        <router-view></router-view>
      </div>
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
    drawer: true
  }),
  created() {
    const dark = localStorage.getItem('darkTheme');
    
    if (dark === 'true') {
      this.$vuetify.theme.dark = true;
    } else {
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
.logo {
  .logo-text {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: #3987D5;
  }
  img {
    height: 50px;
  }
}
</style>
