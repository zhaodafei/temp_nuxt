const state = () => {
  return {
    token:"hello_token"
  }
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
}

export const actions = {
  // nuxtServerInit 生命周期
  // nuxtServerInit(store, content) {
  //   store.commit('setToken','nuxtServerInit_token')
  //   console.log('nuxtServerInit 执行了',store);
  // },
}
