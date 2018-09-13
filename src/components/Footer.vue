<template>
	<div class="content border-top">
		  
		<router-link to="/home" tag="div" class="item">
			<span class="iconfont icon-shouye">&#xe62e;</span>
			<span class="item-text">首页</span>
		</router-link tag="div">
		 
		<router-link to="/find" tag="div" class="item">
			<span class="iconfont icon-shouye">&#xe632;</span>
			<span class="item-text">发现</span>
		</router-link>
		<router-link to="/list" tag="div"  class="item">
			<span class="iconfont icon-shouye">&#xe645;</span>
			<span class="item-text">订单</span>
		</router-link>
		<router-link to="/me" tag="div"  class="item">
			<span class="iconfont icon-shouye">&#xe62f;</span>
			<span class="item-text">我的</span>
		</router-link>
		 

	</div>
</template>
<script>
	export default{
		name:'Footer'
	}
</script>
<style lang='stylus' scoped>

 
.content
	position:fixed
	z-index:999
	display:flex
	bottom:0.1rem
	width:100%
	padding-top:.2rem
	.item
		width:25%
		text-align:center
		color:#8e8e93
		.iconfont
			display:block
			font-size:.55rem
		&.router-link-active
			.iconfont
				color:red
		.item-text
			font-size:.15rem
</style>