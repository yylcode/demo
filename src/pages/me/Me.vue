<template>
	<div>
		 <me-header></me-header>
		 <me-footer></me-footer>
	</div>
</template>
<script>
	import MeHeader from './components/Header'
	import MeFooter from '../../components/Footer'
	export default{
		name:"Me",
		components:{
			MeHeader,
			MeFooter
		}
	}
</script>
<style lang="stylus">
	  
</style>