// 页面中使用 this.$store.state.user.xxx
import {cookies} from 'cookie'
const state = () => ({
  isLogin: false, // 登录状态
  userToken: undefined, // 用户登录令牌
  feiStoreStr: '我是store中的数据', // 页面中使用 this.$store.state.user.feiStoreStr
})

const mutations = {
  // 这种方法怎么写 this???????????????????/
  // 设置当前token
  SET_TOKEN(state, token) {
    console.log('commit 方法也执行了');
    state.token = token
    this.$cookies.set('user_cookie', token)
  },
  GET_TOKEN(state) {
    console.log('store/user.js 我执行了');
    let fei = this.$cookies.get('user_cookie');
    console.log('store/user.js 我也执行了', fei);
  }
}

const actions = {
}

const getters = {

}

export default {
  // namespace: true,
  state,
  mutations,
  actions,
  getters
}

