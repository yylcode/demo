<template>
	<div>
		<find-header></find-header>
		<find-footer></find-footer>

	</div>
</template>
<script>
	import FindHeader from './components/Header'
	import FindFooter from '../../components/Footer'
	export default{
		name:'Find',
		components:{
			FindHeader,
			FindFooter
		}
	}
</script>
<style lang="stylus" scoped>
	
</style>