<template>
	<div class="kefu">
		<h4>如果您有任何疑问，请联系我们的客服</h4>
		<div>客服QQ号：8921211435</div>
		<div>客服微信号：sjiahduw</div>
		<div>
			<img src="../../common/images/wx.png" />
		</div>
		<div>扫一扫 加客服</div>
	</div>
</template>

<script>
	export default {

	}
</script>
<style  scoped>
	.kefu{
		background:#fff;
		margin-top:.1rem;
		padding:0 .08rem;
	}
	h4 {
		font-size: 0.16rem;
		height: 0.5rem;
		line-height: 0.5rem;
		padding-left: .1rem;
		font-weight: bold;
		position: relative;
	}
	h4:before {
		content: '';
		display: inline-block;
		position: absolute;
		width : .04rem;
		height : .16rem;
		left: 0;
		top : .18rem;
		background: #4CA4FF ;
	}
	img{
		width:50%;
		height:auto;
		display:inline-block;
	}
</style>