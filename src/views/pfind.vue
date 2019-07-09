<template>
	<div class="pfind">
		<mt-header title="找回密码" class="page-view-header">
		    <mt-button icon="back" slot="left" @click="goBack"></mt-button>
		</mt-header>
	    <div class="page-navbar">
		    <!-- navbar -->
			    <mt-navbar class="page-part" v-model="selected">
			      <mt-tab-item id="1">邮箱找回密码</mt-tab-item>
			      <mt-tab-item id="2">手机找回密码</mt-tab-item>

			    </mt-navbar>
		 
		 
			<!-- tabcontainer -->
		    <mt-tab-container v-model="selected">
		      <mt-tab-container-item id="1">
		      	<div class="fpage_state">
		      		
		      	</div>
		        <div class="fpage-email">
		        	<mt-field class="fpage-email_user" placeholder="请输入您已注册的用户名" v-model="Edata.username"></mt-field>
		        	<mt-field class="fpage-email_user" placeholder="请输入您已注册的邮箱" v-model="Edata.Email"></mt-field>
		        	<mt-field class="fpage-email_user" label="验证码" placeholder="请输入验证码" v-model="Edata.captcha">
  						<img src="static/images/branner1.png" height="45px" width="100px">
					</mt-field>
		        </div>
		        <div class="fpage-button">
					<mt-button  class="fpage_button_edit" @click="Elogin">确认修改</mt-button>
				</div>
		      </mt-tab-container-item>
		      <mt-tab-container-item id="2">
		        <div class="fpage-email">
		        	<mt-field class="fpage-email_user" placeholder="请输入您已注册的手机号码" v-model="Pdata.mobile"></mt-field>
		        	<mt-field class="fpage-email_user" placeholder="请输入6位手机验证码" v-model="Pdata.code"></mt-field>
					<mt-field class="fpage-email_user"  placeholder="请输入新密码" type="password" v-model="Pdata.password"></mt-field>
		        </div>
		        <div class="fpage-button">
					<mt-button  class="fpage_button_edit" @click="Plogin">确认修改</mt-button>
				</div>
		      </mt-tab-container-item>

		    </mt-tab-container>
	  	</div>		  	    
	</div>
</template>

<script>
	export default{
		data(){
				return{
					selected: '1',
					Edata:{username:'',Email:'',captcha:''},
					Pdata:{mobile:'',code:'',password:''}
				}			
		},
		methods: {
		    goBack () {
		        this.$router.go(-1)
		    },
		    Elogin(){
		    	alert("我是邮箱找回页面");
		    },
		    Plogin(){
		    	this.$http.pfind(this.Pdata).then(data =>{
		      		console.log(data);
		      		if(data.flag!=200){
		      			alert(data.msg);
		      		}else{
		      			this.$router.push('/login');
		      		}
		      	}).catch(error => {
		      		alert("系统出错，请联系管理员");
		      	})
		    }
    	}
	}		
</script>

<style lang="less" >
  .pfind{
    width: 100%;
    height: 540px;
    .page-view-header{
    	width: 100%;
    	height: 45px;
    	background-color: #383838;
    }
    .mint-tab-item-label{
    	padding-left: 16px;
    	font-size: 18px;
    	line-height:40px;
    	
    }
    .mint-navbar .mint-tab-item.is-selected{
    	color: #009688;
    	border-bottom:2px solid#009688; 
    }
    .fpage_state{
    	width: 100%;
    	height: 150px;


    }
    .fpage-email{
    	width: 100%;
    	height: 148px;
		margin-top: 30px;
		padding-bottom: 20px;

    }
    .fpage-email_user{
		width: 100%;
		border-bottom: 1px solid#C7C7C7;    
		padding-left: 16px;	
    }
    .fpage-button{
		width: 90%;
		padding-top:30px;   
		padding-bottom: 50px; 	
    }
    .fpage_button_edit{
		width: 334px;
		height: 46px;
		background-color: #009688;
		color: #FFFFFF;    	
		margin-left: 19px;
		align-items: center;
		justify-content: center;
    }

  }
</style>
