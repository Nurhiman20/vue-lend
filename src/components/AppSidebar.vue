<template>
  <v-navigation-drawer
    v-model="drawer"
    dark
    app
    clipped
    color="primary"
    overlay-color="secondary"
  >
    <v-list-item class="mb-0 justify-center">
      <v-list-item-content>
        <v-list-item-title class="text-h4 text-center">
          <strong class="mr-1 font-weight-black">Vue</strong>

          <span>App</span>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider class="mx-3 mb-2" />

    <v-list
      dense
      class="lighten-1 mt-4"
    >
      <template v-for="(item, i) in sidebarData">
        <v-list-item
          :key="i"
          link
          :to="item.to"
        >
          <v-list-item-action>
            <v-icon color="accent">{{ item.icon }}</v-icon>
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
      mini: false
    }
  },
  computed: {
    sidebarData () {
      return sidebar
    },
    mainMenuData () {
      return mainMenu
    }
  }
}
</script>

<style lang="scss">
#keep .v-navigation-drawer__border {
  display: none
}

.v-list .v-list-item--active {
  color: inherit;
  background-color: #FB7A66;
}
</style>
