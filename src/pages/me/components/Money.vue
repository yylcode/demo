<template>
	<div class="content border-bottom">
		<div class="item border-right">
			 <div class="item-info">
			 	<span class="iconfont icon-1">&#xe634;</span>
			 	<div class="item-title">钱包</div>
			 </div>
		</div>
		<div class="item border-right">
			 <div class="item-info">
			 	<span class="iconfont icon-2">&#xe600;</span>
			 	<div class="item-title">钱包</div>
			 </div>
		</div>
		<div class="item">
			  <div class="item-info">
			 	<span class="iconfont icon-3">&#xe60d;</span>
			 	<div class="item-title">钱包</div>
			 </div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Money'
	}
</script>
<style lang="stylus" scoped>
	.content
		// border:1px solid red
		height:1.67rem
		background: #fff
		.item
			width:33%
			height:100%
			float:left
			text-align:center
			// border-right:1px solid #cacaca
			.item-info
				width:.8rem
				// border:1px solid red
				margin:.2rem auto
				.iconfont
					color:gold
					font-size:.8rem
				.item-title
					// border:1px solid red
					font-size:.2rem
					text-align:center
					color:#666
				.icon-1
					color:#ff9900
				.icon-2
					color:#ff5f3e
				.icon-3
					color:#6ac20b
				
			 
</style>