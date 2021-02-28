const SET_ADDRESS = (state, payload) => {
  state.address = payload;
}

const SET_TRONWEB = (state, payload) => {
  state.tronWeb = payload;
}

export default {
  SET_ADDRESS,
  SET_TRONWEB
}
