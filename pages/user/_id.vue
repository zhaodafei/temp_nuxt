<template>
  <div>
    这里是详情页面
    <p>
      <NuxtLink :to="{path:'/user/list'}">返回列表页面</NuxtLink>
    </p>
    <p>
      从Github查看Vue项目的信息
    </p>
    <p>{{ username }}</p>
    <p>{{ age }}</p>
    <p>{{ url }}</p>

    <Fei />
  </div>
</template>

<script>
import Fei from '~/components/Fei'
export default {
  name: "id",
  components: {
    Fei
  },
  head() {
    return {
      title: '用户首页' + this.id,
      meta: [
        {
          hid: '个人用户详情',
          name: '个人用户详情',
          content: '个人用户详情'
        }
      ]
    }
  },
  async asyncData({$axios}) {
    // console.log("axios 网络请求_sssssssssssss", $axios);

    let res = await $axios.get('https://api.github.com/repos/vuejs/vue')
    // console.log("??????",res.data);
    let dataSource = res.data
    return {
      username: dataSource.name,
      age:dataSource.html_url,
      url:dataSource.url,
    }
  },
  data() {
    return {
      id:0,
      username: "初始化_username",
      age: "初始化_age",
      url: "初始化_url",
    }
  },
  created() {
    console.log(this.$route.params);
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>

</style>
