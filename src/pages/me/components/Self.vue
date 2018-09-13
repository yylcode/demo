<template>
	<div>
		<router-link tag="div" to="/login" class="page">
			<div class="imges">
				<span class="iconfont imges-icon">&#xe602;</span>
			</div>
			<div class="mes">
				<div class="login">
					登录/注册
				</div>
				<div class="tips">
					<span class="iconfont">&#xe605;</span>登陆后享受更多特权
				</div>
			</div>
			<div class="enter">
				<span class="iconfont">&#xe62d;</span>
			</div>
		</router-link>
	</div>
</template>
<script>
	export default{
		name:'Self'
	}
</script>
<style lang="stylus" scoped>
	.page
		display:flex
		align-items:center
		background: linear-gradient(to right,#0af , #0085ff)
		color:white
		width:100%
		height:2.2rem
		.imges
			height:1rem
			width:1rem
			line-height:.6rem
			font-size:1rem
			text-align:center
			border-radius:.5rem
			margin-left:.4rem
			border:1px solid #fff
		.mes
			height:1rem
			width:4rem
			margin-left:.2rem
			.login
				height:.5rem
				font-size:.4rem
				font-weight:bold
			.tips
				 
				height:.3rem	
				margin-top:.1rem
				font-size:.2rem	
		.enter
			height:1rem
			width:.3rem
			margin-left:1.2rem
			line-height:1rem
			 
</style>