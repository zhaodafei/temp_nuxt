<template>
<div>
  <h3>搜索列表结果页面</h3>
  <p><NuxtLink :to="{path:'/user',query:{q:'abc_abc'}}">返回列表页面</NuxtLink></p>
  <ul>
    <li @click="toDetail(1)">11111</li>
    <li @click="toDetail(2)">2222</li>
    <li @click="toDetail(3)">3333</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "list",
  validate({params, query}) {
    console.log('validate 执行了', params, query);
    return true
  },
  async asyncData({$axios}) {
    // console.log("axios 网络请求_sssssssssssss", $axios);

    // let res = await $axios.get('http://localhost:8072/api/test/detail')
    let res = await $axios.get('/api/test/detail')
    console.log("proxy 接口代理成功",res.data);

  },
  methods: {
    toDetail(id) {
      console.log('ssssssss');
      this.$router.push({path: `/user/${id}`})
    },
  }
}
</script>

<style scoped>
li{
  cursor: pointer;
  color: blue;
}
li:hover{
  color: #ff6b81;
}
</style>
