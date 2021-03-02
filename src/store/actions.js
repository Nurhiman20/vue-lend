import TronWeb from 'tronweb';

const tronWeb = new TronWeb({
  fullHost: 'https://nile.trongrid.io',
  privateKey: 'f91e3a1a982b274618c8c2e5a5399601095fea607b1c47e7f3cd3bdeb173cab8'
})

async function checkTronLink({ commit }) {
  await new Promise(resolve => {
    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
      commit('SET_ADDRESS', window.tronWeb.defaultAddress.base58);
      commit('SET_TRONWEB', window.tronWeb);
    }
    resolve();
  })
}

async function getPool({ state }) {
  let instance = await tronWeb.contract().at(state.contractAddress);

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
  let ethpool = await instance._tokenID(5).call();
  listPool.push(ethpool);

  console.log(listPool);

  // await new Promise(resolve => {
  //   commit("SET_POOL", listPool);
  //   resolve();
  // })
}

export default {
  checkTronLink,
  getPool
}
