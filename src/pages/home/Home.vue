<template>
	<div> 
		<home-header></home-header>
		<page-footer></page-footer>
	</div>
</template>
<script>
	import HomeHeader from './components/Header'
	import PageFooter from '../../components/Footer'
	export default{
		name:'Home',
		components:{
			HomeHeader,
			PageFooter
		}
	}
</script>
<style lang="stylus" scoped>
	.title
		color:red
</style>