<template>
    <div>
        <button
            v-for="(item, index) in tabs"
            :key="item"
            @click="itemsClick(item)"
            :class="{ active: cuttentTab === item }"
        >{{ item }}</button>

        <!-- v-if 实现切换组件 --> 
        <!-- <template v-if="cuttentTab === 'home'">
            <Home></Home>
        </template>
        <template v-else-if="cuttentTab === 'about'">
            <About></About>
        </template>
        <template v-else="cuttentTab === 'category'">
            <Category></Category>                                                                                                                                                                                                                                                                                                                                                                                                                                     
        </template> -->

        <!-- 动态组件 -->
        <component :is="cuttentTab"></component>        
        <!-- <keep-alive include="" exclude="" max="">
            <component :is="cuttentTab"></component>
            组件 对页面进行缓存
            要确认 组件自身 有没有携带name 属性
            include 用逗号分割 a,b 名称匹配则缓存 或者正则表达式 或者是一个数组
            exclude 相反
            max 最大可以缓存的组件实例的数量
        </keep-alive> -->
    </div>


</template>

<script>
import Home from "./Home.vue"
import Category from "./Category.vue";
import About from "./About.vue";
export default {
    data() {
        return {
            tabs: ["home", "about", "category"],
            cuttentTab: "home"
        };
    },
    methods: {
        itemsClick(item) {
            console.log("点击:" + item);
            this.cuttentTab = item;
        }
    },
    components: { Home, Category, About }
}
</script>

<style scoped>
.active {
    color: red;
}
</style>