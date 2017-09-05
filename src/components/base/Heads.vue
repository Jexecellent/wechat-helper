<template>
  <div class="title">
      <div class="userInfo">
        <span>您好,</span>
        <span>{{user}}</span>
        <router-link :to="{path:'/account'}" tag="span">我的账户</router-link>
        <span @click="logout">退出</span>
      </div>  
  </div>
</template>

<script>

export default {
  data () {
    return {
      user:'Users'
    }
  },
  methods:{
    logout() {
      alert(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .title{
      width: 100%;
      height:.45rem;
      line-height: .45rem ;
      background: #51A2FE ;
      color : #fff;
      text-align: right;
      padding-right: .1rem ;
      box-sizing: border-box;
    }
    .userInfo span{
      margin: 0 5px;
    }
</style>
