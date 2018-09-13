<template>
	<div>
		 <list-header></list-header>
		 <list-footer></list-footer>
	</div>
</template>
<script>
	import ListHeader from './components/Header'
	import ListFooter from '../../components/Footer'
	export default{
		name:"List",
		components:{
			ListHeader,
			ListFooter
		}
	}
</script>
<style lang="stylus" scoped>
	 
</style>