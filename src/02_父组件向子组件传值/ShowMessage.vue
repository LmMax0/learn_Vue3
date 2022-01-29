<template>
	<div>
		<h2>{{ title }}</h2>
		<p>{{ content }}</p>
		<div :class="$attrs.asa"></div>
	</div>
</template>

<script>
export default {
	// 关闭继承元素属性 通过$attrs.属性名 获取属性值
	inheritAttrs: false,
	// props: ['title', 'content']
	props: {
		title: String,
		content: {
			type: String,
			require: true,
			default: "默认值"
		},
		info: {
			type: Object,
			default() {
				return { name: "objctName" }
			},

			//  自定义验证函数
			// Validator(){
			//     return true or false;
			// }
		}
	}
}
</script>

<style scoped>
</style>