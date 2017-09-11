<template>
	<div class="account">
		<div class="baseInfo">
			<div class="infoList">
				<span><a></a>绑定手机号</span>
				<span>{{account.username}}</span>
			</div>
			<div class="infoList">
				<span><a></a>群主微信号</span>
				<span>
					<input type="text" v-model="account.wechat_username"/>
					<div class="span-btn" @click="update('wechat_username',account.wechat_username)">修改</div>
				</span>
			</div>
			<div class="infoList">
				<span><a></a>账户昵称</span>
				<span>
					<input type="text"  v-model="account.nickname" />
					<div class="span-btn" @click="update('nickname',account.nickname)">修改</div>
				</span>
			</div>
			<div class="infoList">
				<span><a></a>账户状态</span>
				<span>{{role.role}}</span>
			</div>
		</div>
		<div class="qunStatus">
			<h4>群绑定状态</h4>
			<div class="qunStatusList">
				<span>已绑定群1</span>
				<span v-if="groupList['1'].name">{{groupList['1'].name}}</span>
				<span v-else>暂未绑定</span>
			</div>
			<div class="qunStatusList">
				<span>已绑定群2</span>
				<span v-if="groupList['2'].name">{{groupList['2'].name}}</span>
				<span v-else>暂未绑定</span>
			</div>
			<div class="qunStatusList">
				<span>已绑定群3</span>
				<span v-if="groupList['3'].name">{{groupList['3'].name}}</span>
				<span v-else>暂未绑定</span>
			</div>
			<div class="qunStatusList">
				<span>已绑定群4</span>
				<span v-if="groupList['4'].name">{{groupList['4'].name}}</span>
				<span v-else>暂未绑定</span>
			</div>
			<div class="qunStatusList">
				<span>已绑定群5</span>
				<span v-if="groupList['5'].name">{{groupList['5'].name}}</span>
				<span v-else>暂未绑定</span>
			</div>
			<my-about></my-about>
		</div>
	</div>
</template>

<script>
	import MyAbout from '../about'
	export default {
		components:{
			MyAbout
    	},
		data() {
			return {
				groupList:  {
					"1": {
						// "id": 5,
						// "index": 1,
						// "numbers": "3",
						// "name": "测试群😎"
					},
					"2": {
						"id": 13,
						"index": 2,
						"numbers": "3",
						"name": "unknwn"
					},
					"3": {
						"id": 15,
						"index": 3,
						"numbers": "32",
						"name": "Mei9rua1i+ivlQ=="
					},
					"4": {
						"id": 16,
						"index": 4,
						"numbers": "3",
						"name": "44CQ5rWL6K+V5Yqp5omLQnVn5Y+N6aaINOOAkQ=="
					},
					"5": {
						"id": 42,
						"index": 5,
						"numbers": "3",
						"name": "5rWL6K+V5Yqp5omLQnVn5Y+N6aaINQ=="
					}
				},
				account : {
					"username": "18576432434",
					"wechat_username": "qingtian5317",
					"nickname": "18571212434"
				},
				role : {
					"type": 2,
        			"role": "高级群主"
				}
			}
		},
		methods : {
			update (param,val){
				var postData = {
					name : param,
					value : val
				}
			}
		}
	}
</script>
<style  scoped>
	.span-btn{
		padding:.04rem .08rem;
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
	.baseInfo{
		border-bottom:1px solid #ddd;
	}
	.account{
		margin-top: .1rem;
		padding: 0 .08rem .1rem .08rem;
		background : #fff;
	}
	.infoList{
		display:flex;
		padding: .06rem 0;
    	box-sizing: border-box;
	}
	.infoList span:first-child{
		display: inline-block;
		width:35%;
	}
	.infoList span a{
		width : .16rem;
		height : .16rem;
		display:inline-block;
		background: url(../../common/images/phone.png)no-repeat 0 0;
		background-size:100% 100%;
	}
	.infoList span:last-child{
		flex-grow : 1;
	}
	.infoList:nth-of-type(2) span a{
		background: url(../../common/images/wechat.png)no-repeat 0 0;
		background-size:100% 100%;
	}
	.infoList:nth-of-type(3) span a{
		background: url(../../common/images/contact.png)no-repeat 0 0;
		background-size:100% 100%;
	}
	.infoList:last-of-type span a{
		background: url(../../common/images/status.png)no-repeat 0 0;
		background-size:100% 100%;
	}
	.qunStatusList{
		padding: .05rem 0;
	}
	.qunStatusList span:first-child{
		width:35%;
		display:inline-block;
	}
	.qunStatusList span:last-child{
		word-wrap:break-word ;
		width: 60%;
   		display: inline-block;
    	vertical-align: middle;
	}
</style>