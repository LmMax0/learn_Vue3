<template>
	<div>
		<button @click="increament">+1</button>
		<button @click="decreament">-1</button>
		<br>
		<input type="number" v-model="this.num">
		<button @click="increamentN" >+num</button>
	</div>
</template>

<script>

export default {
	// 注册触发事件
	// emits:["add","sub","addN"],
	// 对象形式用来进行参数的验证
	emits:{
		add:null,
		sub:null,
		// addN:payload=>{

		// }
		addN: (num) =>{
			console.log("----> "+num);
			// 通过使用 return true 来通过验证 false 相反
		}
	},
	data() {
		return {
			num: 0
		}
	},
	methods: {
		increament() {
			console.log("+1")
			this.$emit("add")
		},
		decreament() {
			console.log("-1")
			this.$emit("sub")
		},
		increamentN(){
			// console.log(this.num);
			this.$emit("addN",this.num)
		}
	},
}
</script>
   8 89
<style scoped>
</style>