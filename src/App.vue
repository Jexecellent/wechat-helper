<template>
  <div class="wrap">
    <div>
        <heads></heads>
        <tab></tab>
    </div>
    <router-view></router-view>
    <!-- <login></login> -->
  </div>
</template>

<script>
// 一个注释 
 import Heads from './components/base/Heads'
 import Tab from "./components/base/tab"
//import Login from "./components/login"
export default {
  components: {
     Heads ,
    Tab,
   // Login
  }
}
</script>

<style>
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,
  pre,code,form,fieldset,legend,input,button,textarea,
  p,blockquote,th,td { margin:0; padding:0; }
  body { background:#efeff4; color:#555; font-size:12px; font-family: 微软雅黑,Verdana, Arial, Helvetica, sans-serif; }
  td,th,caption { font-size:14px; }
  h1, h2, h3, h4, h5, h6 { font-weight:normal; font-size:100%; }
  address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;}
  a { color:#555; text-decoration:none; }
  a:hover {color:#f40;}
  img { border:none; display: block;vertical-align: middle;}
  ol,ul,li { list-style:none; }
  input, textarea, select, button { font:12px 微软雅黑,Verdana,Helvetica,Arial,sans-serif; outline: none ;
    padding : .03rem;}
  table { border-collapse:collapse; }
  html {overflow-y: scroll;font-size: 100px;} 
  body,html {width:100%;height:100%;}
  .wrap{width:100%;height:100%;}
  .clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
  .clearfix { *zoom:1; }
  .span-btn {   
    padding: .04rem .12rem;
    background:#51A2FE;
    border-radius: .04rem;
    color :#fff;
    display: inline-block;
  }
  .picker button{
		flex-grow:1;
		border:1px solid #ddd;
		background-color: #fff;
		height:.28rem;
		position: relative;
		text-align: left;
		padding:0 .05rem;
	}
	.picker button:after {
		content: '';
		position: absolute;
		right: .1rem;
		top:.1rem;
	   	display: inline-block;
	   	width: .05rem;
	   	height: .05rem;
	   	border-left: 1px solid #555;
	   	border-bottom: 1px solid #555;
	   	transform: rotate(-45deg);
	    -webkit-transform: rotate(-45deg);
	}
  /* input::-webkit-input-placeholder{
　　  color: #fff;
　} */
</style>
