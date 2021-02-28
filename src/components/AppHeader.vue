<template>
  <v-app-bar
    app
    clipped-left
    dark
    color="background2"
    height="50px"
  >
    <div class="logo d-flex align-center">
      <div class="d-flex flex-row align-center mx-auto">
        <v-img src="@/assets/img/logo/logo.png" max-width="30" contain class="mr-1"></v-img>
        <div class="d-flex flex-column mt-3">
          <div class="d-flex flex-row">
            <strong class="mr-1 font-weight-black">RICE</strong>
            <span>TRON</span>
          </div>
          <p class="logo-text text-right mt-n2">DeFi</p>
        </div>
      </div>
    </div>
    <v-spacer></v-spacer>
    <div class="d-flex flex-row justify-end align-center">
      <v-btn icon color="white" @click="hideDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
  props: ['drawer'],
  data () {
    return {
    }
  },
  methods: {
    hideDrawer () {
      this.$emit('hide', !this.drawer)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  font-size: 25px;
}
</style>
