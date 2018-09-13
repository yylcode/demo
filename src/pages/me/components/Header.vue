<template>
	<div class="content border-bottom">
		 <router-link tag="div" to="/">
		 	<div class="header-icon">
		 		<router-link tag="span" to="/home" class="iconfont item-icon">&#xe624;</router-link>
		 	</div>
		 	<div  class="header-title">我的</div>
		 </router-link>
	</div>
</template>
<script>
	export default{
		name:"Header"
	}
</script>
<style lang="stylus" scoped>
	 .content
	 	height:0
	 	padding-bottom:11.7%
	 	background: linear-gradient(to right,#0af , #0085ff)
	 	.header-icon
	 		width:.88rem
	 		float:left
	 		.item-icon
	 			line-height:.88rem
		 		font-size:.46rem
		 		color:white
		 		padding-left:.2rem
	 	.header-title
	 		position:fixed
	 		z-index:99
	 		line-height:.86rem
	 		font-size:.36rem
	 		text-align:center
	 		width:100%
	 		color:#FFFFFF
	 		font-weight:bold
	 		 
</style>