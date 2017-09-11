<template>
	<div class="group">
		<div 
			v-for="(item,key) in groupList" 
			:class="{cur:key == nowIndex}"
			@click="changeGroup(item,key)"
			>
			群{{item.index}}
			</div>
	</div>
</template>
<script>
export default {
	data() {
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
		    nowIndex : 1 
		}
	},
	methods: {
		changeGroup(item,idx) {
			this.$emit('on-change-group',item) 
			this.nowIndex = idx ;
		}
	}

}
</script>
<style>
	.group {
		display:  flex ;
		width : 100%;
		height : .3rem;
		line-height: .3rem ;
		background: #f5f5f5 ;
		box-sizing: border-box; 
		display: flex ;
		flex-direction :row  ;
		justify-content : center ;
		margin-top: .1rem ;
	}
	.group div {
		flex : 1;
		text-align: center;
		border:1px solid #ccc;
		border-right: none ;
	}
	.group div:last-child{
		border-right: 1px solid #ccc ;
	}
	.group div.cur {
		background: #51A2FE ;
		color : #fff;
	}
</style>