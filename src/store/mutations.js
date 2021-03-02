const SET_ADDRESS = (state, payload) => {
  state.address = payload;
}

const SET_TRONWEB = (state, payload) => {
  state.tronWeb = payload;
}

const SET_POOL = (state, payload) => {
  state.listPool = payload;
}

export default {
  SET_ADDRESS,
  SET_TRONWEB,
  SET_POOL
}
