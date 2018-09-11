<template>
	<div>
		<router-link to="/city">
		<home-header></home-header>
		</router-link>
	</div>
</template>
<script>
	import HomeHeader from './components/Header'
	export default{
		name:'Home',
		components:{
			HomeHeader
		}
	}
</script>
<style lang="stylus" scoped>
	.title
		color:red
</style>