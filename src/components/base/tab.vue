<template>
	<div>
	<div class="nav">
		<div  v-for="item in lists" >
			<router-link :to="{path:item.url}">
				<div class="imgbox">
					<img :src="item.imgUrl" alt="" />
				</div>				
				<span>{{item.name}}</span>
			</router-link>
		</div>	
	</div>
	<slot></slot>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				lists: [
					{url:'/setfun',name:'群功能设置',imgUrl:require('../../common/images/set_fun.png')},
					{url:'/report',name:'统计报表',imgUrl:require('../../common/images/report.png')},
					{url:'/setmember',name:'群成员设置',imgUrl:require('../../common/images/set_mem.png')},
					{url:'/kefu',name:'联系客服',imgUrl:require('../../common/images/kefu.png')},
				]
			}
		}
	}
</script>
<style scoped>
	.nav {
		padding: 0 5px ;
		width : 100%;
		height : 1rem;
		background: #fff ;
		box-sizing: border-box; 
		display: flex ;
		flex-direction :row  ;
		justify-content : center ;
	}
	.nav>div {
		flex : 1;
		text-align: center;
	}
	.nav .imgbox{
		width : .5rem;
		height: .5rem;
		margin : 0 auto ;
		margin-top : .1rem;
		margin-bottom: .05rem;
	}
	.nav .imgbox img{
		width:100%;
		height : 100%;
	}
</style>