<template>
  <div>
    <v-dialog v-model="show" persistent width="450">
      <v-card class="pa-3 pb-8">
        <div class="d-flex flex-row align-center justify-center" v-if="asset.image !== undefined">
          <v-img :src="asset.image" :aspect-ratio="1" max-width="35" max-height="35" contain></v-img>
          <v-card-title class="pl-0 ml-2">{{ asset.id }}</v-card-title>
        </div>
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="primary"
          grow
        >
          <v-tab>
            Supply
          </v-tab>
          <v-tab>
            Withdraw
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card
              class="pa-4"
              flat
            >
              <v-text-field
                v-model="supplyAmount"
                label="Supply amount"
                type="number"
                outlined
                dense
              ></v-text-field>
              <div>
                <div class="d-flex flex-row justify-space-between">
                  <p>Borrow Limit</p>
                  <p class="text-bold">$0</p>
                </div>
                <div class="d-flex flex-row justify-space-between">
                  <p>Borrow Limit Used</p>
                  <p class="text-bold">0%</p>
                </div>
              </div>
              <v-divider></v-divider>
              <div class="mt-4">
                <div class="d-flex flex-row justify-space-between">
                  <p>Supplied</p>
                  <p class="text-bold">0 {{ asset.id }}</p>
                </div>
                <div class="d-flex flex-row justify-space-between">
                  <p>Wallet Balance</p>
                  <p class="text-bold">0 {{ asset.id }}</p>
                </div>
                <div class="d-flex flex-row justify-space-between">
                  <p>Supply APY</p>
                  <p class="text-bold">{{ asset.supply_apy }}%</p>
                </div>
              </div>
              <div class="d-flex flex-column justify-center px-6 mt-3">
                <v-btn color="primary">Supply</v-btn>
                <v-btn color="secondary" class="mt-3" @click="closeDialog" outlined>Close</v-btn>
              </div>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card
              class="pa-4"
              flat
            >
              <v-text-field
                v-model="wtihdrawalAmount"
                label="Withdrawal amount"
                type="number"
                outlined
                dense
              ></v-text-field>
              <div>
                <div class="d-flex flex-row justify-space-between">
                  <p>Borrow Limit</p>
                  <p class="text-bold">$0</p>
                </div>
                <div class="d-flex flex-row justify-space-between">
                  <p>Borrow Limit Used</p>
                  <p class="text-bold">0%</p>
                </div>
              </div>
              <v-divider></v-divider>
              <div class="mt-4">
                <div class="d-flex flex-row justify-space-between">
                  <p>Supplied</p>
                  <p class="text-bold">0 {{ asset.id }}</p>
                </div>
                <div class="d-flex flex-row justify-space-between">
                  <p>Wallet Balance</p>
                  <p class="text-bold">0 {{ asset.id }}</p>
                </div>
              </div>
              <div class="d-flex flex-column justify-center px-6 mt-3">
                <v-btn color="primary">Withdraw</v-btn>
                <v-btn color="secondary" class="mt-3" @click="closeDialog" outlined>Close</v-btn>
              </div>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['show', 'asset'],
  data() {
    return {
      supplyAmount: null,
      wtihdrawalAmount: null,
      tab: null
    }
  },
  methods: {
    closeDialog() {
      this.$emit("close", { condition: false, item: {} });
    }
  },
}
</script>
