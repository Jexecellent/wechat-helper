<template>
	<div class="yinfenbox">
		<div class="list" v-for="(item,key) in report">
            <div class="row">
                <span>群员昵称:{{item.nickname}}</span>
                <span>游戏名称:{{item.game_name}}</span>
                <span>ID:{{item.player_index}}</span>
            </div>
			<div class="row">
				<span>总分:{{item.s_grade}}</span>
				<span></span>
				<span>总局数:s{{item.c_room}}</span>
			</div>
        </div>
	</div>
</template>
<script>
	export default {
		components:{
			
		},
		data() {
			return {
				report:[
					 {
						"nickname": "NooParw",
						"game_name": "决战血流",
						"player_index": 607429,
						"s_grade": 111,
						"c_room": 3
					},
					{
						"nickname": "Jackie酷派大神note3",
						"game_name": "决战血流",
						"player_index": 1989533,
						"s_grade": 9,
						"c_room": 1
					},
					{
						"nickname": "付大宝",
						"game_name": "决战血流",
						"player_index": 4492292,
						"s_grade": -2,
						"c_room": 1
					},
					{
						"nickname": "OPPO R9t",
						"game_name": "决战血流",
						"player_index": 1311396,
						"s_grade": -25,
						"c_room": 2
					},
					{
						"nickname": "oppoR9S",
						"game_name": "决战血流",
						"player_index": 4368556,
						"s_grade": -50,
						"c_room": 3
					},
					{
						"nickname": "iphone6玫瑰金",
						"game_name": "决战血流",
						"player_index": 2230491,
						"s_grade": -85,
						"c_room": 3
					}
				]
			}
		},
		methods:{
		
		}
	}
</script>
<style scoped>
	.list{
		margin: .1rem 0;
		border:1px solid #ddd;
		background: #fff;
		padding:.1rem .05rem;
		border-radius: .1rem;
		box-sizing: border-box;
	}
    .row{
        display: flex;
		width:100%;
    }
    .row span{
        flex:1;
		display: inline-block;
		word-wrap:break-word;
		vertical-align: middle;
		text-align: center;
    }
	.row span:first-child{
		text-align: left;
	}
</style>
