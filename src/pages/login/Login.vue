<template>
	<div class="content">
		
		<login-logo></login-logo>
		<login-form></login-form>
	</div>
</template>
<script>
	import LoginForm from './components/Form'
	import LoginLogo from './components/Logo'
	export default{
		name:"Login",
		components:{
			 
			LoginForm,
			LoginLogo
		}
	}
</script>