<template>
  <!--<section class="section">
    <div class="columns is-mobile">
      <card
        title="Free"
        icon="github"
      >
        Open source on <a href="https://github.com/buefy/buefy">
          GitHub
        </a>
      </card>

      <card
        title="Responsive"
        icon="cellphone-link"
      >
        <b class="has-text-grey">
          Every
        </b> component is responsive
      </card>

      <card
        title="Modern"
        icon="alert-decagram"
      >
        Built with <a href="https://vuejs.org/">
          Vue.js
        </a> and <a href="http://bulma.io/">
          Bulma
        </a>
      </card>

      <card
        title="Lightweight"
        icon="arrange-bring-to-front"
      >
        No other internal dependency
      </card>
    </div>
  </section>-->
  <div>
    首页这里的 middleware 是局部的生命周期
    <p class="red-fei">
      <span style="color: #ffd700">使用全局样式</span>
    </p>
  </div>
</template>

<script>
// import Card from '~/components/Card'

export default {
  name: 'IndexPage',
  // components: {
  //   Card
  // },
  middleware: 'auth',
  validate({params, query}) {
    console.log('validate 执行了');
    return true
  },
  asyncData(context) {
    console.log("asyncData 执行了");
    return { project: 'nuxt' }
  },
  fetch({app,store,params}){
    console.log("fetch 执行了");
  },
  beforeCreate() {
    console.log("beforeCreate 执行了");
  },
  created() {
    console.log("created 执行了");
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
}
</script>
