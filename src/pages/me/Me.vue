<template>
	<div>
		<div class="content">
			 <me-header></me-header>
			 <me-footer></me-footer>
			 <me-self></me-self>
			 <me-money></me-money>
			 <me-list></me-list>
		</div>
		 
		 
	</div>
</template>
<script>
	import MeHeader from './components/Header'
	import MeSelf from './components/Self'
	import MeMoney from './components/Money'
	import MeList from './components/List'
	import MeFooter from '../../components/Footer'
	export default{
		name:"Me",
		components:{
			MeHeader,
			MeSelf,
			MeMoney,
			MeList,
			MeFooter
		}
	}
</script>
<style lang="stylus" scoped>
 	 
		 
</style>