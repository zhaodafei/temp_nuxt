const state = () => {
  return {
    token:"hello_token",
    isLogin: false, // 登录状态
    initToken: undefined, // 用户登录令牌
  }
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  // 设置当前token
  SET_TOKEN(state, token) {
    state.initToken = token
    this.$cookies.set('init_cookie', token)
  },
  GET_TOKEN() {
    state.initToken = this.$cookies.get('init_cookie');
  }
}

export const actions = {
  // nuxtServerInit 生命周期
  nuxtServerInit(store, content) {
    // store.commit('setToken','nuxtServerInit_token')
    // console.log('nuxtServerInit 执行了',store);

    store.commit('SET_TOKEN', 'init_cookie_1111111')
    console.log('nuxtServerInit___init_cookie ***保存成功** 执行了');

    let getCookie = this.$cookies.get('init_cookie');
    console.log("获取到了___", getCookie);

  },
}
