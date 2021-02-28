<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import TronWeb from 'tronweb'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
    // this.$store.dispatch("checkTronLink");

    const tronWeb = new TronWeb({
        fullHost: 'https://nile.trongrid.io',
        privateKey: 'f91e3a1a982b274618c8c2e5a5399601095fea607b1c47e7f3cd3bdeb173cab8'
    })
    var contractAddress = 'TQFqUGwHcNowXpkRvWaQ2jHJf9shGDhtt2';
    async function callpool() {
      let instance = await tronWeb.contract().at(contractAddress);

      let trxpool = await instance._tokenID(0).call();

      console.log(trxpool);
    }
    callpool();
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
#app {
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
}
</style>
