<template>
  <div style="max-height: 100vh">
    <div class="d-flex flex-column flex-md-row justify-space-between">
      <h1 class="primary--text">Deposit</h1>
      <div>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="search"
              label="Search"
              append-icon="mdi-magnify"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </div>
    </div>
    <v-card flat class="mt-3">
      <v-tabs
        color="primary accent-4"
        v-model="tabActive"
      >
        <v-tab
          v-for="item in tabItems"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
      <div>
        <v-data-table
          :headers="headers"
          :items="assetsData"
          :search="search"
          class="elevation-1 overflow-y-auto scrollbar-custom"
          hide-default-footer
          style="max-height: 65vh;"
        >
          <template v-slot:item.assets="{ item }">
            <div class="d-flex flex-row align-center py-3">
              <v-img :src="item.image" :aspect-ratio="1" max-width="35" max-height="35" contain></v-img>
              <p class="ml-2 my-auto">{{ item.assets }}</p>
            </div>
          </template>
          <template v-slot:item.wallet_balance="{ item }">
            <p class="font-weight-bold my-auto">{{ item.wallet_balance }}</p>
          </template>
          <template v-slot:item.balance_aave="{ item }">
            <p class="font-weight-bold my-auto">{{ item.balance_aave }}</p>
          </template>
          <template v-slot:item.apy="{ item }">
            <p class="my-auto"><span class="font-weight-bold secondary2--text">{{ item.apy }}</span> %</p>
          </template>
        </v-data-table>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: null,
      tabActive: null,
      tabItems: ['All', 'Stable Coins'],
      headers: [
        { text: 'Assets', value: 'assets' },
        { text: 'Your wallet balance', value: 'wallet_balance' },
        { text: 'Your balance in Aave', value: 'balance_aave' },
        { text: 'APY', value: 'apy' }
      ],
      assetsData: [
        {
          image: require('@/assets/img/usdt.svg'),
          assets: 'USDT Coin (USDT)',
          wallet_balance: '$96.74M',
          balance_aave: '$78.33M',
          apy: '7.74'
        },
        {
          image: require('@/assets/img/dai.svg'),
          assets: 'DAI',
          wallet_balance: '$96.74M',
          balance_aave: '$78.33M',
          apy: '7.74'
        },
        {
          image: require('@/assets/img/usdc.svg'),
          assets: 'USD Coin (USDC)',
          wallet_balance: '$96.74M',
          balance_aave: '$78.33M',
          apy: '7.74'
        },
        {
          image: require('@/assets/img/tusd.svg'),
          assets: 'TrueUSD (TUSD)',
          wallet_balance: '$96.74M',
          balance_aave: '$78.33M',
          apy: '7.74'
        },
        {
          image: require('@/assets/img/susd.svg'),
          assets: 'sUSD',
          wallet_balance: '$96.74M',
          balance_aave: '$78.33M',
          apy: '7.74'
        },
        {
          image: require('@/assets/img/busd.svg'),
          assets: 'Binance USD (BUSD)',
          wallet_balance: '$96.74M',
          balance_aave: '$78.33M',
          apy: '7.74'
        },
        {
          image: require('@/assets/img/eth.svg'),
          assets: 'Ethereum (ETH)',
          wallet_balance: '$96.74M',
          balance_aave: '$78.33M',
          apy: '7.74'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
