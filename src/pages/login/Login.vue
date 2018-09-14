<template>
	<div class="content">
		<login-form></login-form>
	</div>
</template>
<script>
	import LoginForm from './components/Form'
	export default{
		name:"Login",
		components:{
			LoginForm
		}
	}
</script>
<style lang="stylus" scoped>
	.content
		font-size:1rem
</style>