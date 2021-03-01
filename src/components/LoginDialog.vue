<template>
  <div>
    <v-dialog v-model="show" persistent width="350">
      <v-card class="pa-3 pb-8">
        <v-card-title>Connect Wallet</v-card-title>
        <div class="d-flex flex-column justify-center px-6" v-if="$store.state.address === null">
          <v-img src="@/assets/img/logo/logo.png" max-width="50" contain class="mx-auto mt-3"></v-img>
          <p class="mx-auto mt-3 text-center">Please connect to TronLink wallet to use Ricetron DeFi</p>
          <v-btn color="secondary" @click="closeDialog">Close</v-btn>
          <p class="mx-auto mt-3 text-center">No TronLink Wallet?</p>
          <a class="mx-auto mt-n4 text-center" href="https://chrome.google.com/webstore/detail/tronlink%EF%BC%88%E6%B3%A2%E5%AE%9D%E9%92%B1%E5%8C%85%EF%BC%89/ibnejdfjmmkpcnlpebklmnkoeoihofec" target="_blank">Click to download TronLink</a>
        </div>
        <div class="d-flex flex-column justify-center px-6" v-else>
          <v-img src="@/assets/img/logo/logo.png" max-width="50" contain class="mx-auto mt-3"></v-img>
          <p class="mx-auto mt-3 text-center">Connected with TronLink</p>
          <v-card flat class="pa-4" color="background">
            <div class="d-flex">
              <p class="break-word">{{ $store.state.address }}</p>
            </div>
          </v-card>
          <v-btn color="secondary" class="mt-5" @click="closeDialog">Close</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['show'],
  methods: {
    closeDialog() {
      this.$emit("close", false);
    }
  },
}
</script>
