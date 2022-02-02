<template>
    <div>
        App组件
        <Home></Home>
        <AsyncComponent></AsyncComponent>
    </div>
</template>

<script>
import { defineAsyncComponent} from 'vue';
// import AsyncCategory from './AsyncCategory.vue';
import Home from "./Home.vue";
import LoadingVue from './Loading.vue';
// const AsyncComponent = defineAsyncComponent(()=> import('./AsyncCategory.vue'))
const AsyncComponent = defineAsyncComponent({
    loader:()=> import('./AsyncCategory.vue'),
    loadingComponent: LoadingVue,
    delay: 2000, // 显示loadingComponent组件之前要等待多少秒再出现
    onError: function(err,retry,attempts){
        // err 错误信息
        // retry 函数 调用 retry重新进行加载
        // attempts 记录尝试的次数
    }
})
    export default {
    components: { Home, AsyncComponent }
}
</script>

<style scoped>

</style>