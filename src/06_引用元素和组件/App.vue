<template>
  <div>
    <!-- 绑定到一个元素上 -->
    <!-- // 动画animate 使用 -->
    <h2 ref="title" class="animate__animated animate__fadeOut animate__infinite" >哈哈哈</h2>

    <!-- 绑定到一个组件实例上 -->
    <nav-bar ref="navBar"></nav-bar>

    <button @click="btnClick">获取元素</button>
  </div>
</template>

<script>
  import NavBar from './NavBar.vue';

  export default {
    components: {
      NavBar
    },
    data() {
      return {
        names: ["abc", "cba"]
      }
    },
    methods: {
      btnClick() {
        console.log(this.$refs.title);

        console.log(this.$refs.navBar.message);
        this.$refs.navBar.sayHello();

        // $el
        console.log(this.$refs.navBar.$el);
      }
    }
  }
</script>

<style scoped>

</style>