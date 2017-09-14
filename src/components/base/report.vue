<template>
	<div>
		<my-groups @on-change-group="groupClick($event)"></my-groups>
		<div class="reportbox">
			<div class="quninfo">
				<span>群{{curGroup}}名称：{{groupList[curGroup].name}}</span>
				<span>群人数：{{groupList[curGroup].numbers}}人</span>
			</div>
			<div class="quninfo">今日房费红包：<strong>{{activeInfo.red_packet}}</strong></div>
			<div class="quninfo">
				<span>昨日开房总数：<strong>{{activeInfo.room_num}}</strong></span>
				<span>昨天活跃人数：<strong>{{activeInfo.active_num}}</strong></span>
			</div>
			<div class="quninfo picker">
				<span>统计内容<button>{{typeList[0].name}}</button></span>
				<span>统计时间<button>{{typeList[0].select[0].name}}</button></span>
			</div>
			<router-view></router-view>
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
		mixins:[Plugins], // 混合 在组件里混入其他配置 相当于对象的合并
		data() {
			return {
				addKey: '' ,
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
				activeInfo: {
					"room_num":"0",
					"active_num":"0",
					"red_packet":"0"
				},
				typeList: [
					 {
						"type": 1,
						"name": "赢分统计",
						"select": [
							{
								"value": 0,
								"name": "今日"
							},
							{
								"value": 1,
								"name": "昨日"
							},
							{
								"value": 2,
								"name": "近3天"
							},
							{
								"value": 7,
								"name": "近7天"
							}
						]
					},
					{
						"type": 2,
						"name": "开房统计",
						"select": [
							{
								"value": 0,
								"name": "今日"
							},
							{
								"value": 1,
								"name": "昨日"
							},
							{
								"value": 2,
								"name": "近3天"
							},
							{
								"value": 7,
								"name": "近7天"
							}
						]
					},
					{
						"type": 3,
						"name": "签到统计",
						"select": 0
					},
					{
						"type": 4,
						"name": "比赛报表",
						"select": 0
					}
				]
			}
		},
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
			},
			...mapMutations([
				'updataCurGroup'
			])
		}
	}
</script>
<style scoped>
	.reportbox{
		padding:0 .08rem;
	}
	.quninfo{
		display: flex;
		margin: .05rem 0;
	}
	.quninfo>span{
		flex:1;
	}
	.quninfo:nth-of-type(2),.quninfo:nth-of-type(3){
		font-size:14px;
		font-weight:bold;
	}
	.quninfo:nth-of-type(2) strong,.quninfo:nth-of-type(3) strong{
		font-weight:bold;
		color:#51A2FE;
	}
	.picker span:first-child button{
		width:50%;
	}
	.picker span:last-child button{
		width:35%;
	}
</style>
