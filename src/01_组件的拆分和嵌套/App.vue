<template>
  <div id="">
		<!-- <header-vue></header-vue>
		<main-vue></main-vue>
		<footer-vue></footer-vue> -->
		<HeaderVue></HeaderVue>
		<MainVue></MainVue>
		<FooterVue></FooterVue>
	</div>
</template>

<script>
import HeaderVue from "./Header.vue";
import MainVue   from "./Main.vue";
import FooterVue from "./Footer.vue";
export default {
	components:{
		HeaderVue,
		MainVue,
		FooterVue
	},
	data() {
		return {
			
		}
	},
	methods: {
		
	},
	computed: {
		
	},

};
</script>

<style scoped>


</style>