<template>
  <div style="max-height: 100vh">
    <div class="d-flex flex-column flex-md-row justify-space-between">
      <h1 class="primary--text">Home</h1>
      <div class="text-right">
        <p>Current market size</p>
        <h1 class="primary--text font-weight-bold mt-n4">$ 2,995,558,554.27</h1>
      </div>
    </div>
    <div class="mt-3">
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
          class="elevation-1 overflow-y-auto"
          hide-default-footer
          style="max-height: 65vh;"
        >
          <template v-slot:item.assets="{ item }">
            <div class="d-flex flex-row align-center py-3">
              <v-img :src="item.image" :aspect-ratio="1" max-width="35" max-height="35" contain></v-img>
              <p class="ml-2 my-auto">{{ item.assets }}</p>
            </div>
          </template>
          <template v-slot:item.market_size="{ item }">
            <p class="font-weight-bold my-auto">{{ item.market_size }}</p>
          </template>
          <template v-slot:item.total_borrowed="{ item }">
            <p class="font-weight-bold my-auto">{{ item.total_borrowed }}</p>
          </template>
          <template v-slot:item.deposit_apy="{ item }">
            <p class="my-auto"><span class="font-weight-bold secondary2--text">{{ item.deposit_apy }}</span> %</p>
          </template>
          <template v-slot:item.variable_borrow="{ item }">
            <p class="my-auto"><span class="font-weight-bold secondary--text">{{ item.variable_borrow }}</span> %</p>
          </template>
          <template v-slot:item.stable_borrow="{ item }">
            <p class="my-auto"><span class="font-weight-bold secondary3--text">{{ item.stable_borrow }}</span> %</p>
          </template>
        </v-data-table>
        <div class="d-flex justify-end mt-1">
          <v-switch
            v-model="darkMode"
            inset
            label="Dark theme"
            @change="setDarkTheme"
          ></v-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {      
      tabActive: null,
      darkMode: false,
      tabItems: ['USD', 'Native'],
      headers: [
        { text: 'Assets', value: 'assets' },
        { text: 'Market Size', value: 'market_size' },
        { text: 'Total Borrowed', value: 'total_borrowed' },
        { text: 'Deposit APY', value: 'deposit_apy' },
        { text: 'Variable Borrow APR', value: 'variable_borrow' },
        { text: 'Stable Borrow APR', value: 'stable_borrow' }
      ],
      assetsData: [
        {
          image: require('@/assets/img/usdt.svg'),
          assets: 'USDT Coin (USDT)',
          market_size: '$96.74M',
          total_borrowed: '$78.33M',
          deposit_apy: '7.74',
          variable_borrow: '15.29',
          stable_borrow: '16.79'
        },
        {
          image: require('@/assets/img/dai.svg'),
          assets: 'DAI',
          market_size: '$96.22M',
          total_borrowed: '$77.88M',
          deposit_apy: '7.71',
          variable_borrow: '15.08',
          stable_borrow: '16.58'
        },
        {
          image: require('@/assets/img/usdc.svg'),
          assets: 'USD Coin (USDC)',
          market_size: '$96.74',
          total_borrowed: '$78.33',
          deposit_apy: '7.74',
          variable_borrow: '15.29',
          stable_borrow: '16.79'
        },
        {
          image: require('@/assets/img/tusd.svg'),
          assets: 'TrueUSD (TUSD)',
          market_size: '$96.74',
          total_borrowed: '$78.33',
          deposit_apy: '7.74',
          variable_borrow: '15.29',
          stable_borrow: '16.79'
        },
        {
          image: require('@/assets/img/susd.svg'),
          assets: 'sUSD',
          market_size: '$96.74',
          total_borrowed: '$78.33',
          deposit_apy: '7.74',
          variable_borrow: '15.29',
          stable_borrow: '16.79'
        },
        {
          image: require('@/assets/img/busd.svg'),
          assets: 'Binance USD (BUSD)',
          market_size: '$96.74',
          total_borrowed: '$78.33',
          deposit_apy: '7.74',
          variable_borrow: '15.29',
          stable_borrow: '16.79'
        },
        {
          image: require('@/assets/img/eth.svg'),
          assets: 'Ethereum (ETH)',
          market_size: '$96.74',
          total_borrowed: '$78.33',
          deposit_apy: '7.74',
          variable_borrow: '15.29',
          stable_borrow: '16.79'
        }
      ]
    }
  },
  methods: {
    setDarkTheme(val) {
      this.$vuetify.theme.dark = val;
      localStorage.setItem('darkTheme', val);
    }
  },
  created() {
    let dark = localStorage.getItem('darkTheme');
    if (dark === 'true') {
      this.darkMode = true;
    } else {
      this.darkMode = false;
    }
  },
}
</script>
