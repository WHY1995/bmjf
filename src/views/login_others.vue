<template>
    <div class="login_others">
      <mt-header title="其它登录方式" class="page-view-header">
        <mt-button icon="back" slot="left" @click="goBack"></mt-button>
      </mt-header>
      <div style="margin-top:200px">
         <div class="wx">
           <a>
               <img src="static/images/wx.png"/>
               <p>微信登录</p>
           </a>
         </div>
         <div class="duanxin" >
           <a @click="login_phone">
               <img src="static/images/ph.png"/>
               <p>手机短信登录</p>
           </a>
         </div>
      </div>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        testData: 'Mon Jan 21 2019 16:12:31 GMT+0800 (中国标准时间)',
        testData1: 1,
        param: {username:'',password:''}
      }
    },
    computed: {
      testData2 () {
        return this.testData1 + 'sss'
      }
    },
    created () {
    },
    mounted () {
      this.$nextTick(() => {
      })
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      login_phone(){
      	this.$router.push('/login_phone')
      },
      login () {
        this.$http.login(this.param).then(data => {
          // 返回处理
          this.$router.push('/account')
        }).catch(error => {
          // 异常处理
        })
      },
      showToast () {
        this.$toast({ message: '操作成功', position: 'bottom', duration: 1000})
      },
      routerImg () {
        this.$router.push('/images-list')
      }
    }
  }
</script>

<style lang="less" scoped>
  .login_others{
    width: 100%;
    .home_branner{
        height: 200px;
        .home_branner_img{
            width: 100%;
            height: 100%;
        }
    }
    .page-view-header{
        width: 100%;
        height: 45px;
        background-color: #383838;
    }
    .wx{
        width:50%;
        height:600px;
        display:inline-block;
        text-align:center;
    }
    .duanxin{
        width:50%;
        height:600px;
        display:inline-block;
        text-align:center;
    }
    a{
      text-decoration:none;
      color:#7B7B7B;
    }
    img{
      width:100px;
      height:100px;
    }
    p{
      font-size:18px;
      margin-top:40px;
    }


  }
</style>