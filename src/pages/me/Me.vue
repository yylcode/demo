<template>
	<div>
		 <me-header></me-header>
		 <me-footer></me-footer>
		 <me-self></me-self>
	</div>
</template>
<script>
	import MeHeader from './components/Header'
	import MeSelf from './components/Self'
	import MeFooter from '../../components/Footer'
	export default{
		name:"Me",
		components:{
			MeHeader,
			MeSelf,
			MeFooter
		}
	}
</script>
<style lang="stylus">
	  
</style>