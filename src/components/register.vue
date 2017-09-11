<template>
	<div class="login">
		<div class="logo"></div>
		<div class="inputbox">
			<div class="hrefbtn">
				<router-link :to="{path:'/about'}">功能介绍</router-link>
				<router-link :to="{path:'/kefu'}">联系我们</router-link>
			</div>
			<div class="textbox phonebox">
				<i></i>
				<input type="text" placeholder="手机号" >
			</div>
			<div class="textbox pwdbox">
				<i></i>
				<span></span>
				<input type="password" placeholder="密码" >
			</div>
			<div class="textbox codebox">
				<i></i>
				<input type="text" placeholder="验证码" >
				<div class="getCode">获取验证码</div>
			</div>
			<div class="textbox btnbox">注册</div>
			<div class="agree">
				我已阅读并同意KK群主助手使用协议
			</div>
			<router-link class="tologin" :to="{path:'/login'}">已有帐号，登录</router-link>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			 
		}
	},
	methods: {
		
	}
}
</script>
<style>
	.login{
		width:100%;
		height:100%;
		background: url(../common/images/bg.jpg) no-repeat 0 0;
		background-size:100% 100%;
	}
	.logo{
		position: absolute;
		top:10%;
		width:40%;
		height:.87rem;
		margin-left: 30%;
		background: url(../common/images/login_logo.png) no-repeat 0 0;
		background-size:100% 100%;
	}
	.inputbox{
		position: absolute;
		top:25%;
		width:80%;
		margin-left: 10%;
	}
	.hrefbtn{
		display: flex;
		margin: .08rem 0;
	}
	.hrefbtn a{
		flex:1;
		text-align:center;
		color:#fff;
	}
	.textbox{
		width:100%;
		height:.45rem;
		margin-bottom: .08rem;
		position: relative;
	}
	.textbox i{
		position: absolute;
		top: .05rem;
		left: .15rem;
		display: inline-block;
		width: .3rem;
		height: .35rem;
		background: url(../common/images/icon_phone.png) no-repeat 0 0;
		background-size: 100% 100%;
	}
	.textbox input{
		width:100%;
		height:100%;
		border:0 none;
		outline: 0 none;
		background: url(../common/images/input_bg.png) no-repeat 0 0;
		background-size:100% 100%;
		padding-left: .5rem;
		box-sizing: border-box;
		color:#fff;
	}
	.pwdbox i{
		background: url(../common/images/icon_password.png) no-repeat 0 0;
		background-size: 100% 100%;
	}
	.pwdbox span{
		position: absolute;
		top: .05rem;
		right: .15rem;
		display: inline-block;
		width: .3rem;
		height: .35rem;
		color:#fff;
		background: url(../common/images/eye2.png) no-repeat 0 0;
		background-size: 100% 100%;
	}
	.btnbox{
		background-color: #fff;
		border-radius: 100px;
		text-align:center;
		line-height: .45rem;
		font-weight: bold;
		margin-top: .5rem;
	}
	.toleft a:first-child{
		text-align: left;
		color:#0F5996;
	}
	.toleft a:last-child{
		text-align: right;
		color:#0F5996;
	}



	.codebox input{
		width:60%;
		background: url(../common/images/code_bg.png) no-repeat 0 0;
		background-size:100% 100%;
	}
	.codebox .getCode{
		width:40%;
		height:.38rem;
		line-height: .38rem;
		background: #fff;
		position: absolute;
    	right: 0;
    	top: 0.05rem;
    	text-align: center;
		border-radius: 100px;
	}
	.agree{
		width:100%;
		font-size: 12px;
		margin-bottom: .08rem;
		text-align:center;
	}
	.tologin{
		text-align:center;
		color:#0F5996;
	}
</style>