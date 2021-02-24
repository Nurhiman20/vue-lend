<template>
  <v-app-bar
    app
    clipped-left
    dark
    color="primary"
    height="50px"
  >
    <div class="logo d-flex align-center">
      <strong class="font-weight-black">Vue</strong>
      <span>App</span>
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
