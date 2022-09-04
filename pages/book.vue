<template>
  <!-- 这里是为 pages/book/  这个目录做子路由准备 -->
  <div>
    <h3 style="color: #ff6b81"> 下面的数据是子路由数据 </h3>
    <nuxt-child/>
  </div>

</template>

<script>
export default {
  name: "book"
}
</script>

<style scoped>

</style>
