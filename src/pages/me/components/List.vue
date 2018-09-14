<template>
	<div class="content">
		<div class="address item">
			<span class="iconfont address-icon">&#xe606;</span>
			<span>我的地址</span>
			<span class="iconfont icon-enter">&#xe62d;</span>
		</div>
		<div class="glod item">
			<div class="store item-div">
				<span class="iconfont store-icon">&#xe611;</span>
				<span>金币商城</span>
				<span class="iconfont icon-enter">&#xe62d;</span>
			</div>
			 
			<div class="share item-div">
				<span class="iconfont share-icon">&#xe787;</span>
				<span>分享拿十元现金</span>
				<span class="iconfont icon-enter">&#xe62d;</span>
			</div>
		</div>
		<div class="tips item">
			<div class="phone item-div">
				<span class="iconfont phone-icon">&#xe625;</span>
				<span>我的客服</span>
				<span class="iconfont icon-enter">&#xe62d;</span>
			</div>
			 
			<div class="download item-div">
				<span class="iconfont download-icon">&#xe657;</span>
				<span>下载APP</span>
				<span class="iconfont icon-enter">&#xe62d;</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'List'
	}
</script>
<style lang="stylus" scoped>
	.item
		border-top:1px solid #eae7e7
		border-bottom:1px solid #eae7e7
		padding:.3rem
		font-size:.3rem
		margin-top:.2rem
		.item-div:nth-child(1)
			padding-bottom:.2rem
			border-bottom:1px solid #f7f7f7
		.item-div:nth-child(2)
			padding-top:.2rem
		.address-icon
			margin-left:-.1rem
			color:#4aa5f0 
		.store-icon
			color:#94d94a
		.icon-enter
			display:block
			float:right
		.share-icon
			color:#fc7b53
		.phone-icon
			color:#4da6f0
		.download-icon
			color:#3cabff
		
		 
</style>