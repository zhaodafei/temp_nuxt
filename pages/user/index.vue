<template>
<div>
  <!--查询页面-->
  <button @click="fei">查询数据</button>
</div>
</template>

<script>
import { mapMutations } from 'vuex' // tip: 在安装`nuxt`的时候,已经内置了`vuex`,所以在`package.json`中看不到
export default {
  name: "index",
  head() {
    return {
      title: '用户首页',
      meta: [
        {
          hid: 'description-aaaaaa 这是是用户介绍信息',
          name: 'description-bbbbb 这是是用户介绍信息',
          content: 'My custom description-eeeeeeee 这是是用户介绍信息'
        }
      ]
    }
  },
  middleware: 'auth2',
  methods: {
    ...mapMutations({
      handleFoo: 'user/GET_TOKEN'
    }),
    fei(){
      console.log('aaaaaaa',this.$store.state.user.feiStoreStr);
      this.handleFoo();
      // this.$store.commit('user/SET_TOKEN')


      // this.$router.push('/user/list')
      // this.$router.push({
      //   path: "/user/list",
      //   query: {id: 111},
      // })
    }
  }
}
</script>

<style scoped>

</style>
