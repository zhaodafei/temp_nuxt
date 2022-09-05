
export default function ({store, route, redirect, params, query}) {
  console.log('具体某个页面执行 middleware__执行了');
  store.commit('GET_TOKEN');
  let testFei = store.state.initToken
  console.log("是否有cookie的值 ",testFei);
  if (!testFei) {
    // redirect('/')
  }
}
