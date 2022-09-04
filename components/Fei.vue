<template>
  <div style="color: #ff6b81;margin-top: 30px;font-size: 20px;font-weight: 700">
    我是组件
    <p>{{ username }}</p>
    <p>{{ age }}</p>
    <p>{{ url }}</p>
  </div>
</template>

<script>
export default {
  // { store, params,$axios }
  async fetch() {
    console.log('fetch__________start');
    let res = await this.$axios.get('https://api.github.com/repos/ant-design/ant-design')
    // console.log("fetch___________-",res.data);
    let dataSource = res.data
    this.username = dataSource.name
    this.age = dataSource.html_url
    this.url = dataSource.url
  },
  data() {
    return {
      id:0,
      username: "初始化_username",
      age: "初始化_age",
      url: "初始化_url",
    }
  },
}
</script>

<style scoped>

</style>
