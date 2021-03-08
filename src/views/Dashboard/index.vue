<template>
  <div style="max-height: 100vh">
    <div class="d-flex flex-column flex-md-row justify-space-between">
      <h1 class="primary--text">Dashboard</h1>
    </div>
    <v-card flat class="mt-6">
      <div>
        <v-data-table
          :headers="headers"
          :items="assetsData"
          class="elevation-1 overflow-y-auto scrollbar-custom"
          hide-default-footer
          flat
          style="max-height: 65vh;"
          :loading="loading"
        >
          <template v-slot:item.id="{ item }">
            <div class="d-flex flex-row align-center py-3">
              <v-img :src="item.image" :aspect-ratio="1" max-width="35" max-height="35" contain></v-img>
              <p class="ml-2 my-auto">{{ item.id }}</p>
            </div>
          </template>
          <template v-slot:item.supply_apy="{ item }">
            <p class="my-auto"><span class="font-weight-bold secondary2--text">{{ item.supply_apy }}</span> %</p>
          </template>
          <template v-slot:item.borrow_apy="{ item }">
            <p class="my-auto"><span class="font-weight-bold secondary3--text">{{ item.borrow_apy }}</span> %</p>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn color="primary" small @click="showSupplyDialog({ condition: true, item: item })">Supply</v-btn>
            <v-btn color="secondary" small class="ml-2">Borrow</v-btn>
          </template>
        </v-data-table>
      </div>
    </v-card>

    <supply-dialog 
      :show="dialogSupply"
      :asset="selectedAsset"
      @close="showSupplyDialog"
    ></supply-dialog>
  </div>
</template>

<script>
import TronWeb from 'tronweb';
import supplyDialog from './components/NewSupply';

export default {
  components: {
    supplyDialog
  },
  data() {
    return {      
      tabActive: null,
      selectedAsset: {},
      tabItems: ['USD', 'Native'],
      headers: [
        { text: 'Assets', value: 'id' },
        { text: 'Supply APY', value: 'supply_apy', align: 'end' },
        { text: 'Borrow APY', value: 'borrow_apy', align: 'end' },
        { text: '', value: 'actions', align: 'end' }
      ],
      assetsData: [],
      loading: false,
      dialogSupply: false
    }
  },
  methods: {
    formatCurrency(val) {
      return val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
    },
    getImage(id) {
      if (id === 'TRX') {
        return '@/assets/img/trx.png'
      } else if (id === 'RET') {
        return '@/assets/img/ret.png'
      } else if (id === 'BTC') {
        return '@/assets/img/btc.png'
      } else if (id === 'USDT') {
        return '@/assets/img/usdt.png'
      } else {
        return '@/assets/img/ric.png'
      }
    },
    async callpool() {
      this.loading = true;
      const tronWeb = new TronWeb({
        fullHost: 'https://nile.trongrid.io',
        privateKey: 'f91e3a1a982b274618c8c2e5a5399601095fea607b1c47e7f3cd3bdeb173cab8'
      })

      let instance = await tronWeb.contract().at(this.$store.state.contractAddress);

      let listPool = [];

      let trxpool = await instance._tokenID(0).call();
      listPool.push(trxpool);
      let retpool = await instance._tokenID(1).call();
      listPool.push(retpool);
      let ricpool = await instance._tokenID(2).call();
      listPool.push(ricpool);
      let usdtpool = await instance._tokenID(3).call();
      listPool.push(usdtpool);
      let btcpool = await instance._tokenID(4).call();
      listPool.push(btcpool);
      // let ethpool = await instance._tokenID(5).call();
      // listPool.push(ethpool);

      let fixedPool = [];
      listPool.forEach(pool => {
        let dataPool = {
          id: pool.id,
          image: null,
          total_supply: tronWeb.toDecimal(pool.totalsupply._hex),
          supply_apy: tronWeb.toDecimal(pool.supplyinterest._hex) / 100,
          total_borrow: tronWeb.toDecimal(pool.totalborrow._hex),
          borrow_apy: tronWeb.toDecimal(pool.borrowinterest._hex) / 100
        }
        if (pool.id === 'TRX') {
          dataPool.image = require('@/assets/img/trx.png');
        } else if (pool.id === 'RET') {
          dataPool.image = require('@/assets/img/ret.png');
        } else if (pool.id === 'BTC') {
          dataPool.image = require('@/assets/img/btc.png');
        } else if (pool.id === 'USDT') {
          dataPool.image = require('@/assets/img/usdt.png');
        } else if (pool.id === 'RIC') {
          dataPool.image = require('@/assets/img/ric.png');
        }
        fixedPool.push(dataPool);
      });

      this.assetsData = fixedPool;
      this.loading = false;
    },
    showSupplyDialog(value) {
      this.dialogSupply = value.condition;
      this.selectedAsset = value.item;
    }
  },
  created() {
    this.callpool();
  },
}
</script>
