<template>
	<div class="setmember-wrap">
		<my-groups @on-change-group="groupClick($event)"></my-groups>
		<div class="setbox">
			<div class="quninfo">
				<span>群{{curGroup}}名称：{{groupList[curGroup].name}}</span>
				<span>群成员：{{groupList[curGroup].numbers}}人</span>
			</div>
			<div class="searchbox">
				<input type="text" placeholder="查找成员"/>
				<span class="span-btn">查找成员</span>
			</div>
			<div class="memberList" v-for="(item,key) in memberList">
				<span class="badge"></span>
				<div class="list">
					<span>游戏名称：{{item.game}}</span>
					<span v-if="item.tip_off_num!=0">已被{{item.tip_off_num}}个群主举报</span>
				</div>
				<div class="list">
					<span>群员昵称：{{item.wx_nickname | nickname4}}</span>
					<span>微信号：{{item.wx_username | wechatname8}}</span>
				</div>
				<div class="list">
					<span>游戏ID：{{item.player_index}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import MyGroups from '../group'
	import { mapGetters , mapMutations } from 'vuex'
	import Plugins  from '../../utiles'
	export default {
		components:{
			MyGroups
		},
		data(){
			return {
				groupList:  {
					"1": {
						"id": 5,
						"index": 1,
						"numbers": "3",
						"name": "测试群😎"
					},
					"2": {
						"id": 13,
						"index": 2,
						"numbers": "3",
						"name": "MjIy44CQ5rWL6K+V5Yqp5omLQnVn5Y+N6aaIMuOAkQ=="
					},
					"3": {
						"id": 15,
						"index": 3,
						"numbers": "32",
						"name": "5rWL6K+V5Yqp5omLQnVn5Y+N6aaIMw=="
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
				memberList: [
					 {
						"id": 5163,
						"wx_nickname": "付大宝付大宝付大宝付大宝付大宝付大宝",
						"wx_username": "fudabao_songxiaobao",
						"button": 1,
						"game_id": 20,
						"game": "决战血流",
						"player_index": "4492292",
						"tip_off_num": "0",
						"tip_off_status": 0
					},
					{
						"id": 5169,
						"wx_nickname": "oppoR9S",
						"wx_username": "wxid_7ugs4akjho0q12",
						"button": 1,
						"game_id": 20,
						"game": "决战血流",
						"player_index": "4368556",
						"tip_off_num": "0",
						"tip_off_status": 0
					},
					{
						"id": 5168,
						"wx_nickname": "OPPO R9t",
						"wx_username": "wxid_2n1epr3fphkj22",
						"button": 1,
						"game_id": 20,
						"game": "决战血流",
						"player_index": "1311396",
						"tip_off_num": "0",
						"tip_off_status": 0
					},
					{
						"id": 5167,
						"wx_nickname": "NooParw",
						"wx_username": "Sureeirat",
						"button": 1,
						"game_id": 20,
						"game": "决战血流",
						"player_index": "607429",
						"tip_off_num": "0",
						"tip_off_status": 0
					},
					{
						"id": 5170,
						"wx_nickname": "红米Note4测试号",
						"wx_username": "wxid_t9l4t8lmicwi12",
						"button": 1,
						"game_id": 20,
						"game": "决战血流",
						"player_index": "374059",
						"tip_off_num": "0",
						"tip_off_status": 0
					},
					{
						"id": 5143,
						"wx_nickname": "X_x",
						"wx_username": "qingtian5317",
						"button": 1,
						"game_id": 20,
						"game": "决战血流",
						"player_index": "2815981",
						"tip_off_num": "1",
						"tip_off_status": 1,
						"date": "2017-09-06",
						"reason_id": 1,
						"detail": "你好"
					},
					{
						"id": 5180,
						"wx_nickname": "iphone6玫瑰金",
						"wx_username": "iphone6mgj",
						"button": 0,
						"tip_off_num": "0",
						"tip_off_status": 0
					},
					{
						"id": 5160,
						"wx_nickname": "Dong2",
						"wx_username": "wxid_1w0trcxz2krv22",
						"button": 0,
						"tip_off_num": "0",
						"tip_off_status": 0
					},
					{
						"id": 5142,
						"wx_nickname": "测试助手1",
						"wx_username": "uuddnn22",
						"button": 0,
						"tip_off_num": "0",
						"tip_off_status": 0
					},
					{
						"id": 5175,
						"wx_nickname": "skiplow",
						"wx_username": "skiplow",
						"button": 0,
						"tip_off_num": "1",
						"tip_off_status": 0
					}
				]
			}
		},
		filters:{
			nickname4 (val){
				if( val ){
					if(val.length>4){
						return val.slice(0,3) + '...'
					}else{
						return val
					}
				}
			},
			wechatname8 (val){
				if( val ){
					if(val.length>9){
						return val.slice(0,8) + '...'
					}else{
						return val
					}
				}
			},
		},
		mixins:[Plugins], // 混合 在组件里混入其他配置 相当于对象的合并
		computed:{
			/**
			* mapGetters 方法介绍：
			* @note--  注意这些方法的书写位置 mapGetters 只能放在 computed 里
			* vuex提供的工具方法
			* 等价于  curGroup(){return this.$store.getters.getCurGroup }
			* 获取vuex state中管理的curGroup数据
			*/
			...mapGetters({
				curGroup:'getCurGroup'
			})
		},
		methods:{
			groupClick(val) {
				this.updataCurGroup(val) // curGroup = val.index  修改curGroup都得是index属性
				console.log(this.curGroup);
			}
		}
	}
</script>
<style  scoped>
	.setbox{
		padding: 0 .08rem;
	}
	.quninfo{
		display:flex;
		margin: .05rem 0;
	}
	.quninfo span{
		flex:1;
		text-align:center;
	}
	.searchbox{
		width: 80%;
    	margin-left: 10%;
		display:flex;
	}
	.searchbox input{
		flex-grow : 1;
		margin-right: .1rem;
	}
	.memberList{
		background:#fff;
		padding:.05rem;
		margin-top: .1rem;
		margin-bottom: .1rem;
		border-radius : .1rem;
	}
	.memberList .badge{

	}
	.memberList .list{
		display:flex;
		color:#959595;
	}
	.memberList .list:first-of-type span{
		color:#555;
	}
	.memberList .list span{
		flex:1;
		display:inline-block;
	}
	.memberList .list span:last-child{
		word-wrap:break-word;
		vertical-align: middle;
	}
</style>