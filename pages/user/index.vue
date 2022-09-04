<template>
<div>
  查询页面
  <button @click="fei">查询数据</button>
</div>
</template>

<script>
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
  methods:{
    fei(){
      console.log('aaaaaaa');

      // this.$router.push('/user/list')
      this.$router.push({
        path: "/user/list",
        query: {id: 111},
      })
    }
  }
}
</script>

<style scoped>

</style>
