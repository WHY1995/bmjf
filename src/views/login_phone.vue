<template>
  <div class="login">
		<mt-header title="手机短信登录" class="page-view-header">
	    <mt-button icon="back" slot="left" @click="goBack"></mt-button>
	  </mt-header>
		<div class="login_field">	
			<mt-field class="login_field_border" label="手机号" placeholder="请输入手机号码" v-model="param.mobile"></mt-field>
			<mt-field class="login_field_border" label="验证码" v-model="param.captcha">
  			<span @click="getPhoneCode" id="getCode">获取验证码</span>
			</mt-field>		
			<div class="login-button">
				<mt-button  class="login-button_1" @click="phone_login">登录</mt-button>
			</div>
			
			<div class="login_zc">
				<span @click="login">身份证号登录</span>
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
        param: {mobile:'',captcha:''}
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
      login () {
      	
       this.$router.push('/login')
        
      },
      showToast () {
        this.$toast({ message: '操作成功', position: 'bottom', duration: 1000})
      },
      routerImg () {
        this.$router.push('/images-list')
      },
      getPhoneCode () {
      	alert(document.getElementById("getCode").text);
        /*this.$http.send_code(this.param).then(data => { 
          //alert(JSON.stringify(data));
          console.log(JSON.stringify(data));
        }).catch(error => {
          // 异常处理
        })*/
      },
      phone_login(){
      	this.$http.phone_login(this.param).then(data =>{
      		//console.log(data.flag);
      		//console.log(data.msg);
      		if(data.flag!=200){
      			alert(data.msg);
      		}else{
      			this.$router.push('/account');
      		}
      	}).catch(error => {
      		  alert("页面异常，请稍等");
      	})
      }
    }
  }
</script>

<style lang="less" scoped>
  .login{
    width: 100%;
    height: 540px;
    .page-view-header{
    	width: 100%;
    	height: 45px;
    	background-color: #383838;
    }
 		.login_field{
 			width: 100%;
 			height: 150px;
 		
 			padding-top: 25px;
 		}
		.login_field_border{
			width: 100%;
			border-bottom: 1px solid#C7C7C7;
			padding-left: 16px;
		}
		.login-button{
			width: 90%;
			padding-top: 30px;
		}
		.login-button_1{
			width: 334px;
			height: 46px;
			background-color: #009688;
			margin-left: 19px;
			color: #FFFFFF;
		}

		.login_zc{
			padding-top: 70px;
			font-size: 14px;
			color: #009688;
			width: 100%;
			line-height: 50px;

			text-align: center;
		}

  }
</style>
