<template>
    <div>
        <show-message content="哈哈哈" title="我是哈哈哈"></show-message>
        <show-message :content="content" :title="title"></show-message>
        <show-message v-bind="message"></show-message>
<!--  为非props中属性的传递  -->
        <show-message title="尝试默认值" asa="dasasda"></show-message>
    </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue'
export default {
    components: { ShowMessage },
    data() {
        return {
            title:"hhh",
            content:"我是hhh",
            message:{
                title:"lalal",
                content:"我是lalal",
            }
        }
    },


}
</script>

<style scoped>
</style>