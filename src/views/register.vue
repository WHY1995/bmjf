<template>
  <div class="register">
		<mt-header title="注册" class="page-view-header">
	    <mt-button icon="back" slot="left"  @click="goBack"></mt-button>
	  </mt-header>
		<div class="login_field">	
			<mt-field class="login_field_border" label="身份证号 :" placeholder="请输入身份证号码" v-model="param.idcard"></mt-field>
			<mt-field class="login_field_border" label="密码 :" placeholder="请输入密码" type="password" v-model="param.password"></mt-field>
			<mt-field class="login_field_border" label="确认密码 :" placeholder="请再次输入密码" type="password" v-model="repassword"></mt-field>
			<mt-field class="login_field_border" label="验证码 :" placeholder="请验证码" v-model="param.code">
  			<img :src = "imgSrc" height="45px" width="120px" style="border: 1px solid#C7C7C7" @click="getCode">
			</mt-field>		
			<div class="login_wjmm">
				<input type="checkbox" id='ckb'  checked/>
				<label >&nbsp;&nbsp;勾选代表同意协议</label>
			</div>
			<div class="login-button">
				<mt-button  class="login-button_1" @click="getRegister">注册</mt-button>
			</div>
			
			<div class="login_zc">
				<span class="login_zc_1" @click="login">已有账号登录</span>
				<span class="login_zc_2">|</span>
				<span class="login_zc_3" @click="openOthers">其他方式登录</span>
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
        repassword:'',
        param: {idcard:'',password:'',code:''},
     		imgSrc:'http://bmjf.hn898.com/static/code/code.png',
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
      login () {
        this.$router.push('/login')
      },
      openOthers(){
      	this.$router.push('/login_others')
      },
      showToast () {
        this.$toast({ message: '操作成功', position: 'bottom', duration: 1000})
      },
      routerImg () {
        this.$router.push('/images-list')
      },
      getCode(){
      	this.$http.img_code(this.params).then(data =>{
      		console.log(data);
      		this.imgSrc=data.url + "?ass=" + (new Date()).getTime();
      		//alert(JSON.stringify(data));
      	}).catch(error => {
      		//异常处理
      	})    
      },
      getRegister(){
      	if(this.param.idcard==""){
      		alert("请输入身份证号码");
      		return;
      	}else if(this.param.password==""){
      		alert("请输入密码");
      		return;
      	}else if(this.repassword==""){
      		alert("请再次输入密码");
      		return;
      	}else if(this.param.code==""){
      		alert("请输入验证码");
      		return;
      	}
      	this.$http.idcard_register(this.param).then(data =>{
      		console.log(data);
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
  .register{
    width: 100%;
    height: 500px;
    .page-view-header{
    	width: 100%;
    	height: 45px;
    	background-color: #383838;
    }
 		.login_field{
 			width: 100%;
 			height: 150px;
 			padding-top: 20px;
 		}
		.login_field_border{
			width: 100%;
			height: 45px;
			border-bottom: 1px solid#C7C7C7;
			padding-left: 10px;
		}
		.login-button{
			width: 90%;
			padding-top: 20px;
		}
		.login-button_1{
			width: 334px;
			height: 46px;
			background-color: #009688;
			margin-left: 19px;
			color: #FFFFFF;
		}
		.login_wjmm{
			color: #009688;
			padding-top: 25px;
			padding-left: 110px;
			font-size: 14px;
			padding-bottom:15px;
			input{
				float: left;
			}
			label{
				float: left;
				margin-top: 3px;
			}
		}
		.login_zc{
			padding-top: 30px;
			font-size: 14px;
			color: #7B7B7B;
			padding-left: 90px;
			line-height: 50px;
			height: 200px;
			
		}
		.login_zc_2{
			margin-left: 10px;
		}
		.login_zc_3{
			margin-left: 10px;
		}

  }
</style>
