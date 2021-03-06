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
            <div class="d-flex flex-row justify-center" v-if="$store.state.address !== null && item.allow_balance === 0">
              <v-btn class="mx-auto" color="secondary2" dark small @click="approveToken(item.token_address)" :loading="loading">Approve</v-btn>
            </div>
            <div class="d-flex flex-row justify-center" v-else-if="$store.state.address !== null && item.allow_balance !== 0">
              <v-btn color="primary" small @click="showSupplyDialog({ condition: true, item: item })">Supply</v-btn>
              <v-btn color="secondary" small class="ml-2" @click="showBorrowDialog({ condition: true, item: item })">Borrow</v-btn>
            </div>
            <div class="d-flex flex-row justify-center" v-else-if="$store.state.address === null">
              <v-btn color="primary" small disabled>Supply</v-btn>
              <v-btn color="secondary" small class="ml-2" disabled>Borrow</v-btn>
            </div>
          </template>
        </v-data-table>
      </div>
    </v-card>

    <supply-dialog 
      :show="dialogSupply"
      :asset="selectedAsset"
      @close="showSupplyDialog"
    ></supply-dialog>

    <borrow-dialog 
      :show="dialogBorrow"
      :asset="selectedAsset"
      @close="showBorrowDialog"
    ></borrow-dialog>
  </div>
</template>

<script>
import TronWeb from 'tronweb';
import supplyDialog from './components/NewSupply';
import borrowDialog from './components/NewBorrow';

export default {
  components: {
    supplyDialog,
    borrowDialog
  },
  data() {
    return {      
      tabActive: null,
      selectedAsset: {},
      tabItems: ['USD', 'Native'],
      tronWeb: null,
      headers: [
        { text: 'Assets', value: 'id' },
        { text: 'Supply APY', value: 'supply_apy', align: 'end' },
        { text: 'Borrow APY', value: 'borrow_apy', align: 'end' },
        { text: '', value: 'actions', align: 'end' }
      ],
      assetsData: [],
      loading: false,
      dialogSupply: false,
      dialogBorrow: false
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
      this.tronWeb = new TronWeb({
        fullHost: 'https://nile.trongrid.io',
        privateKey: 'f91e3a1a982b274618c8c2e5a5399601095fea607b1c47e7f3cd3bdeb173cab8'
      })

      let instance = await this.tronWeb.contract().at(this.$store.state.contractAddress);

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
          total_supply: this.tronWeb.toDecimal(pool.totalsupply._hex),
          supply_apy: this.tronWeb.toDecimal(pool.supplyinterest._hex) / 100,
          total_borrow: this.tronWeb.toDecimal(pool.totalborrow._hex),
          borrow_apy: this.tronWeb.toDecimal(pool.borrowinterest._hex) / 100,
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

      if (this.$store.state.address !== null) {
        // check approve
        let instanceRet = await this.tronWeb.contract().at('TVpTrW82SQmBSNd5McDwAg9QuWUFDFQCpo');
        let allowBalanceRet = await instanceRet.allowance(this.$store.state.address, this.$store.state.contractAddress).call();

        let instanceBtc = await this.tronWeb.contract().at('TDHSehsEis93VmzjSs6ctGLDbMMBa4vyq9');
        let allowBalanceBtc = await instanceBtc.allowance(this.$store.state.address, this.$store.state.contractAddress).call();

        let instanceUsdt = await this.tronWeb.contract().at('TRGZn68MLabgjL1FAuRgXV6VMjiiLeQDHs');
        let allowBalanceUsdt = await instanceUsdt.allowance(this.$store.state.address, this.$store.state.contractAddress).call();

        let instanceRic = await this.tronWeb.contract().at('TGR3P7rptivDV5CBy2QKEekrogeCp3YhFa');
        let allowBalanceRic = await instanceRic.allowance(this.$store.state.address, this.$store.state.contractAddress).call();
        // end check approve

        let viewPool = [];
        fixedPool.forEach(pool => {
          if (pool.id === 'TRX') {
            pool.token_address = null;
            pool.allow_balance = 1;
          } else if (pool.id === 'RET') {
            pool.token_address = 'TVpTrW82SQmBSNd5McDwAg9QuWUFDFQCpo';
            pool.allow_balance = this.tronWeb.toDecimal(allowBalanceRet._hex);
          } else if (pool.id === 'BTC') {
            pool.token_address = 'TDHSehsEis93VmzjSs6ctGLDbMMBa4vyq9';
            pool.allow_balance = this.tronWeb.toDecimal(allowBalanceBtc._hex);
          } else if (pool.id === 'USDT') {
            pool.token_address = 'TRGZn68MLabgjL1FAuRgXV6VMjiiLeQDHs';
            pool.allow_balance = this.tronWeb.toDecimal(allowBalanceUsdt._hex);
          } else if (pool.id === 'RIC') {
            pool.token_address = 'TGR3P7rptivDV5CBy2QKEekrogeCp3YhFa';
            pool.allow_balance = this.tronWeb.toDecimal(allowBalanceRic._hex);
          }
          viewPool.push(pool);
        });

        this.assetsData = viewPool;
      } else {
        this.assetsData = fixedPool;
      }
      
      this.loading = false;
    },
    async approveToken(tokenAddress) {
      this.loading = true;
      let instance = await this.tronWeb.contract().at(tokenAddress);
      let result = await instance.approve(this.$store.state.contractAddress, '115792089237316195423570985008687907853269984665640564039457584007913129639935').send({
          feeLimit: 100000000, // The maximum SUN consumes by calling this contract method.
          //callValue: val * 1000000, //in SUN. 1 TRX = 1,000,000 SUN
          shouldPollResponse: true
      }).then(res => {
          console.log(res);
          console.log(result);
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
        })
      console.log(result);
      this.loading = false;
    },
    showSupplyDialog(value) {
      this.dialogSupply = value.condition;
      this.selectedAsset = value.item;
    },
    showBorrowDialog(value) {
      this.dialogBorrow = value.condition;
      this.selectedAsset = value.item;
    }
  },
  created() {
    this.callpool();
  },
}
</script>
