<template>
  <v-navigation-drawer
    v-model="drawerApp"
    dark
    app
    clipped
    color="background2"
  >
    <v-list-item class="mb-0 justify-center">
      <v-list-item-content>
        <v-list-item-title class="d-flex text-h4">
          <div class="d-flex flex-row align-center mx-auto">
            <v-img src="@/assets/img/logo/logo.png" max-width="50" contain class="mt-n3 mr-1"></v-img>
            <div class="d-flex flex-column">
              <div class="d-flex flex-row">
                <strong class="mr-1 font-weight-black">RICE</strong>
                <span>TRON</span>
              </div>
              <p class="logo-text text-right mt-n2">DeFi</p>
            </div>
          </div>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider class="mx-3 mb-2" />
      
    <div class="d-flex justify-center">
      <v-chip
        class="ma-3 px-3"
        color="secondary"
        label
        outlined
        v-if="$store.state.address !== null"
      >
        <v-icon left>
          mdi-wallet-outline
        </v-icon>
        {{ truncate($store.state.address) }}
      </v-chip>
      <v-btn outlined color="secondary" v-else>
        <v-icon left>
          mdi-wallet-plus-outline
        </v-icon>
        Connect wallet
      </v-btn>
    </div>

    <v-list
      dense
      class="lighten-1 mt-2"
    >
      <template v-for="(item, i) in sidebarData">
        <v-list-item
          :key="i"
          link
          :to="item.to"
        >
          <v-list-item-action>
            <v-icon color="secondary">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title style="margin-left:-15px">
            {{ item.text }}
          </v-list-item-title>
        </v-list-item>
      </template>
      <v-list-group
        v-for="(mainMenuItem, i) in mainMenuData"
        :key="'main menu ' + i"
        :value="false"
        color="primary"
      >
        <template v-slot:prependIcon>
          <v-icon color="primary">{{mainMenuItem.icon}}</v-icon>
        </template>
        <template v-slot:activator>
          <v-list-item-title style="margin-left:-15px">{{mainMenuItem.text}}</v-list-item-title>
        </template>
        <v-list-item link
          exact
          v-for="(mainMenuItemChild, a) in mainMenuItem.children"
          :key="a"
          :to="mainMenuItemChild.to"
          >
          <v-list-item-content class="pl-10">
            <v-list-item-title>{{mainMenuItemChild.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    </v-navigation-drawer>
</template>

<script>
import { sidebar, mainMenu } from '@/router/nav'

export default {
  name: 'AppSidebar',
  props: ['drawer'],
  data () {
    return {
      mini: false,
      drawerApp: true
    }
  },
  watch: {
    drawer(val) {
      this.drawerApp = val;
    }
  },
  computed: {
    sidebarData () {
      return sidebar
    },
    mainMenuData () {
      return mainMenu
    }
  },
  methods: {
    truncate(str){
      return (str.length > 9) ? str.substr(0, 8) + '...' + str.substr(str.length - 8, str.length - 1): str;
    }
  },
  created() {
    if (this.$vuetify.breakpoint.mdAndDown) {
      this.drawerApp = false;
    }
  },
}
</script>

<style lang="scss">
#keep .v-navigation-drawer__border {
  display: none
}

.logo-text {
  font-size: 0.5em;
}
</style>
