import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  address: null,
  contractAddress: 'TQFqUGwHcNowXpkRvWaQ2jHJf9shGDhtt2',
  tronWeb: null,
  listPool: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
