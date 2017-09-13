<template>
	<div class="setfun-wrap">
		<my-groups @on-change-group="groupClick($event)"></my-groups>
		<div class="setbox base-set">
			<h4>群{{curGroup}} 基础功能设置</h4>
			<div class="base-group">
				<div class="member-set" >
					<label><input type="checkbox" name="member" v-model="setList['1'].status"/>新人欢迎语：</label>
					<input class="set-inp" type="text" placeholder="请添加群新人欢迎语!" v-model="setList['1'].content" name="member-area">
				</div>
				<div class="member-set">
					<label><input type="checkbox" name="member" v-model="setList['2'].status" />新人进群自动发群规：</label>
					<textarea  placeholder="请添加群规" class="roules-area set-inp" rows='3' v-model="setList['2'].content">请大家遵守群规，争做文明人~[耶]</textarea>
				</div>
				<div class="member-set">
					<label><input type="checkbox" v-model="setList['3'].status"/>退群提醒：有人退群时，单发微信消息给我</label>
				</div>
				<div class="member-keys">
					<h5>房费红包关键字</h5>
					<div class="key-set" >
						<span @click="isShow = !isShow">房费红包关键字设置</span>
						<span>房费红包统计</span>
					</div>
					<div class="add-key" v-show="isShow">
						<input  type="text" placeholder="添加关键字" v-model="addKey"/><span class="span-btn" @click="addOnekey(addKey)">添加</span>
					</div>
					<div class="keys-con">
						<div class="keys-list" v-for="(item,index) in setList['4'].content" :key="index">
							<input name="checkbox" type="checkbox" v-model="item.status">
							<label>{{item.word}}</label>
							<span class="delCheckbox" @click="delKey(index)" v-show="isShow">×</span>
						</div>
					</div>
				</div>
			</div>
			<div class="btn">
				<span class="span-btn" @click="saveList(setList)">保存设置</span>
			</div>
		</div>
		<div class="setbox gaoji-set">
			<h4>群{{curGroup}} 高级功能设置</h4>
			<div class="gaoji-group">
				<div class="huodong-set" >
					<span>签到活动设置</span>
					<span>签到统计信息</span>
				</div>
				<div class="picker">
					<label>签到开始</label>
					<button class="timepicker">2017-09-05</button>
				</div>
				<div class="picker">
					<label>签到结束</label>
					<button class="timepicker">2017-09-05</button>
				</div>
				<div class="picker n-ml">
					<label>签到时段</label>
					<span>每日</span>
					<button class="timepicker">12:50</button>
					<span>到</span>
					<button class="timepicker">15:50</button>
				</div>
				<div class="picker">
					<label>签到关键字</label>
					<label>gjiwgipwgnipwg</label>
				</div>
				<div class="picker">
					<label>进行中签到</label>
					<label>grnqpingibpqnb</label>
				</div>
				<div class="btn">
					<span class="span-btn">发起签到活动</span>
				</div>
			</div>
			<div class="gaoji-group">
				<div class="huodong-set" >
					<span>比赛活动设置</span>
					<span>比赛统计信息</span>
				</div>
				<div class="picker">
					<label>报名开始</label>
					<button class="timepicker">2017-09-05</button>
				</div>
				<div class="picker">
					<label>报名结束</label>
					<button class="timepicker">2017-09-05</button>
				</div>
				<div class="picker">
					<label>比赛开始</label>
					<button class="timepicker">2017-09-05</button>
				</div>
				<div class="picker">
					<label>比赛游戏</label>
					<button class="selectpicker">决战血流</button>
				</div>
				<div class="picker n-ml">
					<label>对局人数</label>
					<span><input type="radio" name="playerNum" v-model="setList['5'].player_num"/>4人</span>
					<span><input type="radio" name="playerNum" v-model="setList['5'].player_num"/>3人</span>
				</div>
				<div class="picker n-ml">
					<label>比赛轮数</label>
					<span><input type="radio" name="round" v-model="setList['5'].round"/>单轮</span>
					<span><input type="radio" name="round" v-model="setList['5'].round"/>两轮</span>
				</div>
				<div class="picker">
					*您可以根据规则选择4人或3人，一般麻将类为4人。
				</div>
				<div class="picker">
					<label>当前比赛</label>
					<label>nfiownweie</label>
				</div>
				<div class="btn">
					<span class="span-btn">发起比赛活动</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  //import _ from "lodash"
  import MyGroups from '../group'
  import { mapGetters , mapMutations } from 'vuex'
  import Plugins  from '../../utiles'
	export default {
		components:{
			MyGroups
    	},
		mixins:[Plugins], // 混合 在组件里混入其他配置 相当于对象的合并
		created() {
			console.log(this.getApi(1)) // 在组件载入前 先获取数据确实当前群的第一项是‘群1’或者是其他群
		},
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
				isShow : false ,
				setList :  {
					"1": {
						"content": "欢迎新人@#0加入本群！我们一起愉快地玩耍吧~[耶]",
						"status": true,
						"type": 1
					},
					"2": {
						"content": "请大家遵守群规，争做文明人~[耶]",
						"status": true,
						"type": 2
					},
					"3": {
						"content": "昵称为【#0】，微信号为【#1】的用户退出了您的【#2】群，请您关注.",
						"status": true,
						"type": 3
					},
					"4": {
						"content": [
							{
								"word": "呜呜呜",
								"status": true
							},
							{
								"word": "去去去",
								"status": true
							},
							{
								"word": "qqqq",
								"status": true
							},
							{
								"word": "eeeee",
								"status": true
							}
						],
						"type": 4
					},
					"5": {
						"end_date": "2017-11-01",
						"start_date": "2017-10-01",
						"start_time": "16:10",
						"end_time": "21:10",
						"status": true,
						"type": 5,
						"desc": "10月01日-11月01日",
						"cancel": 1
					},
					"key_word": "@01848ad3 签到"
				}
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
			addOnekey(val) {
				let o = {
					status : true ,
					word : val
				}
				this.setList['4'].content.push(o)
				this.addKey = ''
			},
			saveList(val) {
				console.log(val)
			},
			delKey(idx) {
				this.setList['4'].content.splice(idx,1)
			},
			/**
			* mapMutations 方法介绍 ：
			* @note--  注意这些方法的书写位置 mapMutations 和 mapActions 只能放在 methods 里
			* vuex提供的工具方法
			* 等价于  updataCurGroup(){return this.$store.commit('updataCurGroup',someVal) }
			* 修改vuex state中管理的curGroup数据
			* 因为vuex state中的数据只能通过mutations来修改 所以这里要映射mutations的方法
			* 这么写是一种简写的方式  可以直接使用this.updataCurGroup(someVal) 这种方式修改state数据
			*
			*/
			...mapMutations([
				'updataCurGroup'
			])
		},
		mounted() {
			//console.log(this.$store)
			this.$http.get('/api').then(res=>{
				console.log('res...',res)
			},err=>{
				console.log('err...',err)
			})
		}
	}
</script>
<style scoped>

	.setfun-wrap {
		background: #fff ;
	}
	.setbox {
		padding: 0 .08rem  .1rem 0.08rem ;
		box-sizing:  border-box;
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
	.btn {
		width:100%;
		text-align: center;
	}
	.member-set {
		margin:.08rem;
		display: flex ;
	}
	.member-set label {
		flex-grow : 0;
	}
	.member-set .set-inp {
		flex-grow: 1 ;
	}
	.member-set input[name="member-area"] {
		height:.24rem;
		box-sizing: border-box;
	}
	.member-set .roules-area {
		vertical-align: top ;
	    resize: none;
	    color : #666;
	}
	.member-keys {
		margin:.05rem;
	}
	.member-keys h5 {
		margin-bottom: .08rem ;
	}
	.key-set {
		display: flex ;
		color:#51A2FE;
	}
	.key-set span {
		flex : 1;
		text-align: center;
		margin: .05rem 0;
	}
	.keys-con {
		overflow: hidden;
		height:auto;
	}
	.keys-con .keys-list {
		float:left;
		padding-right: .08rem ;
		margin-bottom: .08rem ;
	}
	.add-key {
		margin: .1rem 0;
		height: 0.25rem;
		text-align: center;
	}
	.add-key input {
		    padding: .03rem .05rem;
	}
	.add-key span {
		margin-left: .2rem;
	}

	/* 高级设置 */
	.gaoji-group{
		padding: 0 .08rem;
		margin-bottom: .2rem;
	}
	.huodong-set span{
		font-weight: bold;
	}
	.huodong-set span:last-child{
		color:#51A2FE;
		font-weight:normal;
		margin-left: .2rem;
	}
	.picker{
		display: flex;
		margin:.1rem 0;
	}
	.picker label{
		flex-grow:0;
	}
	.picker label:last-child{
		margin-left: .2rem;
	}
	.picker button{
		margin-left: .3rem;
	}
	.picker.n-ml button{
		margin-left: .1rem;
		flex-grow: 0;
		width:20%;
	}
	.picker.n-ml span:first-of-type{
		margin-left: .3rem;
	}
	.picker.n-ml span:last-of-type{
		margin-left: .1rem;
	}
</style>
