<template>
	<div class="content">
		 
		<div class="input-1">
			<input class="phone-input" type="text" placeholder="手机号">
			<button class="check-button" type="button">获取验证码</button> 
		</div>
		
		<input class="check-input" type="text" placeholder="验证码">
		<p class="tips">温馨提示：未注册饿了么账号的手机号，登录时将自动注册，切代表您已同意<a>《用户服务协议》</a></p>
 		<button class="login-button" type="button">登录</button>
		
		<a class="about">关于我们</a>
		
	</div>
</template>
<script>
	export default{
		name:'Form'
	}
</script>
<style lang="stylus" scoped> 
	.content
		// border:1px solid black
		height:6rem
		margin:.4rem auto
		font-size:.4rem
		input
			display:block
			margin:.3rem auto
			width:6rem
			height:1rem 
			border:1px solid #ddd
			font-size:.3rem
			padding-left:.2rem
			border-radius:.07rem
 	.input-1
 		position:relative
 		// border:1px solid red
 		height:1.3rem
 		.check-button
 			position: absolute
 			top:50%
 			margin-top:-.35rem
 			right:1rem
 			background: white
 			color:#999
 			font-size :.3rem
 	.tips
 		width:80%
 		diplay:block
 		margin:0.2rem auto
 		font-size:.28rem
 	.login-button
 		display:block
 		margin:.4rem auto
 		color:white
 		width:80%
 		height:1rem
 		background: #4cd96f
 		border-radius :.07rem
 	.about
 		display:block
 		margin:.4rem auto
 		text-align:center
 		font-size:.3rem
 		color:#999
</style>