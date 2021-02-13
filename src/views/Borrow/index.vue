<template>
  <div style="max-height: 100vh">
    <div class="d-flex flex-column flex-md-row justify-space-between">
      <h1 class="primary--text">Borrow</h1>
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
          :search="search"
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
          <template v-slot:item.available="{ item }">
            <p class="font-weight-bold my-auto">{{ item.available }}</p>
          </template>
          <template v-slot:item.variable_avr="{ item }">
            <p class="my-auto"><span class="font-weight-bold secondary--text">{{ item.variable_avr }}</span>%</p>
          </template>
          <template v-slot:item.stable_avr="{ item }">
            <p class="my-auto"><span class="font-weight-bold primary--text">{{ item.stable_avr }}</span> %</p>
          </template>
        </v-data-table>
      </div>
    </div>
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
        { text: 'Available for you', value: 'available' },
        { text: 'Variable APR', value: 'variable_avr' },
        { text: 'Stable APR', value: 'stable_avr' }
      ],
      assetsData: [
        {
          image: require('@/assets/img/usdt.svg'),
          assets: 'USDT Coin (USDT)',
          available: '$96.74M',
          variable_avr: '25.83',
          stable_avr: '7.74'
        },
        {
          image: require('@/assets/img/dai.svg'),
          assets: 'DAI',
          available: '$96.74M',
          variable_avr: '25.83',
          stable_avr: '7.74'
        },
        {
          image: require('@/assets/img/usdc.svg'),
          assets: 'USD Coin (USDC)',
          available: '$96.74M',
          variable_avr: '25.83',
          stable_avr: '7.74'
        },
        {
          image: require('@/assets/img/tusd.svg'),
          assets: 'TrueUSD (TUSD)',
          available: '$96.74M',
          variable_avr: '25.83',
          stable_avr: '7.74'
        },
        {
          image: require('@/assets/img/susd.svg'),
          assets: 'sUSD',
          available: '$96.74M',
          variable_avr: '25.83',
          stable_avr: '7.74'
        },
        {
          image: require('@/assets/img/busd.svg'),
          assets: 'Binance USD (BUSD)',
          available: '$96.74M',
          variable_avr: '25.83',
          stable_avr: '7.74'
        },
        {
          image: require('@/assets/img/eth.svg'),
          assets: 'Ethereum (ETH)',
          available: '$96.74M',
          variable_avr: '25.83',
          stable_avr: '7.74'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
