<template>
	<div class="content">
		<input class="username" type="text" name="" value="" placeholder="">
		<input class="password" type="password" name="" value="" placeholder="">
	</div>
</template>
<script>
	export default{
		name:'Form'
	}
</script>
<style lang="stylus" scoped> 
	.content
		 
		justify-content:center
		border:1px solid black
		width:6rem
		height:6rem
		margin:3rem auto
		.username
			position:absolute
			display:block
			border:1px solid red
			height:1rem
			width:5rem
			margin-top:2rem
		.password
			position:absolute
			display:block
			border:1px solid pink
			height:1rem
			width:5rem
			margin-top:4rem
		
</style>