// import TronWeb from 'tronweb'

async function checkTronLink({ commit }) {
  await new Promise(resolve => {
    console.log(window.tronWeb.defaultAddress.base58);
    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
      commit('SET_ADDRESS', window.tronWeb.defaultAddress.base58);
      commit('SET_TRONWEB', window.tronWeb);
    }

    // if (!window.tronWeb) {
    //   const HttpProvider = TronWeb.providers.HttpProvider;
    //   const fullNode = new HttpProvider('https://nile.trongrid.io');
    //   const solidityNode = new HttpProvider('https://nile.trongrid.io');
    //   const eventServer = 'https://nile.trongrid.io';
      
    //   const tronWeb = new TronWeb(
    //       fullNode,
    //       solidityNode,
    //       eventServer,
    //   );
      
    //   commit('SET_TRONWEB', tronWeb);
    // } 
    resolve();
  })
}

export default {
  checkTronLink
}
