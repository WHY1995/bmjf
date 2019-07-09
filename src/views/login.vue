<template>
  <div class="login">
		<mt-header title="登录" class="page-view-header">
	    <mt-button icon="back" slot="left" @click="goBack"></mt-button>
	  </mt-header>
		<div class="login_field">	
			<mt-field class="login_field_border" label="身份证号" placeholder="请输入身份证号码" v-model="param.idcard"></mt-field>
			<mt-field class="login_field_border" label="密码" placeholder="请输入密码" type="password" v-model="param.password"></mt-field>
			<mt-field class="login_field_border" label="验证码" placeholder="请输入验证码" v-model="param.code">
  			<img :src="imgSrc" height="45px" width="120px" @click="getCode">
			</mt-field>		
			<div class="login_wjmm" @click="pfind">忘记密码</div>
			<div class="login-button">
				<mt-button  class="login-button_1" @click="login">登录</mt-button>
			</div>
			
			<div class="login_zc">
				<span class="login_zc_1" @click="openRegister">注册</span>
				<span class="login_zc_2">|</span>
				<span class="login_zc_3" @click="openOthers">其他方式登录</span>
			</div>
		</div>
		


			
		
    
    <!--<mt-button type="primary" class="home_button" @click="showToast">弹框</mt-button>
    <mt-button type="danger" class="home_button" @click="routerImg">查看图片</mt-button>
    <router-link to="images-list"><mt-button type="danger">查看图片</mt-button></router-link>
    <div class="icon icon-success"></div>
    <div style="margin-top: 25px;font-size: 35px;" ref="teatt">{{testData | commonFormat('time')}}</div>
    <div style="margin-top: 25px;font-size: 35px;">{{testData2}}</div>-->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        testData: 'Mon Jan 21 2019 16:12:31 GMT+0800 (中国标准时间)',
        testData1: 1,
        imgSrc:'',
        param: {idcard:'',code:'',password:''},
      }
    },
    computed: {
      testData2 () {
        return this.testData1 + 'sss'
      }
    },
    created () {
    	this.getCode();
    },
    mounted () {
      this.$nextTick(() => {
      })
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      getCode(){
      	this.$http.img_code().then(data =>{
      		console.log(data);
      		this.imgSrc=data.url + "?ass=" + (new Date()).getTime();
      	}).catch(error => {
      		//异常处理
      	})    
      },
      login () {
      	if(this.param.idcard==""){
      		alert("请输入身份证号码");
      		return;
      	}else if(this.param.code==""){
      		alert("请输入验证码");
      		return;
      	}else if(this.param.password==""){
      		alert("请输入密码");
      		return;
      	}
        this.$http.login(this.param).then(data => {
        	console.log(data);
        	if(data.flag!=200){
        		alert(data.msg);
        	}else{
        		this.$router.push('/account');
        	}
        }).catch(error => {
            alert("系统报错，请稍等");
        })
      },
      pfind(){
      	this.$router.push('/pfind')
      },
      openRegister(){
      	this.$router.push('/register')
      },
      openOthers(){
      	this.$router.push('/login_others')
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

<style lang="less">
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
		.login_wjmm{
			width: 100%;
			height: 30px;
			color: #009688;
			padding-top: 10px;
			padding-left: 300px;
			font-size: 14px;

			display: inline-block;

		}
		.login_zc{
			padding-top: 70px;
			font-size: 14px;
			color: #7B7B7B;
			padding-left: 120px;
			line-height: 50px;
		}
		.login_zc_2{
			margin-left: 10px;
		}
		.login_zc_3{
			margin-left: 10px;
		}
		.mint-cell-title{
     text-align-last:justify;
   	 padding-left: 20px;
     width:90px;
    }
    .mint-cell-value{
     padding-left: 20px;
    }

  }
</style>
