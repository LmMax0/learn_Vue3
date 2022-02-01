<template>
	<div>
		<h2>当前计数{{ counter }}</h2>
		<CounterOperation @addN="addNum"  @add="addOne" @sub="subOne"></CounterOperation>
	</div>
</template>

<script>
import CounterOperation from "./CounterOperation.vue"
export default {
		components: { 
			CounterOperation 
		},
    data() {
		return {
			counter: 0
		};
	},
	methods: {
		addOne(){
			this.counter++
		},
		subOne(){
			this.counter--
		},
		addNum(value){
			console.log(typeof(value));
			console.log(typeof(this.counter));
			this.counter+=value
		}
	},

}
</script>

<style scoped>
</style>