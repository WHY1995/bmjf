<template>
	<div class="account">
	  	<mt-header title="个人中心" class="page-view-header">
	    	<mt-button icon="back" slot="left" ></mt-button>
	  	</mt-header>
		<div class="page-navbar">
		    <!-- navbar -->
			<mt-navbar class="page-part" v-model="selected">
			    <mt-tab-item id="1">基本资料</mt-tab-item>
			    <mt-tab-item id="2">修改密码</mt-tab-item>

			</mt-navbar>
		 
		
			<!-- tabcontainer -->
		    <mt-tab-container v-model="selected">
		      <mt-tab-container-item id="1">
		      	<div class="fpage_img">	
		      		<img src="static/images/touxiang.png"  width="100px" height="100px"/>
					<div class="fpage_img_text">头像上传</div>
		      	</div>
		        <div class="fpage-email">
		        	<mt-field class="fpage-email_user" label="姓名" placeholder="" v-model="username"></mt-field>
		        	<mt-field class="fpage-email_user" label="身份证号" placeholder="" v-model="username"></mt-field>
		        	<mt-field class="fpage-email_user" label="手机号" placeholder="" v-model="username"></mt-field>
		        	<mt-field class="fpage-email_user" label="邮箱" placeholder="" v-model="username"></mt-field>
		        	<mt-field class="fpage-email_user" label="性别" placeholder="">
								<mt-radio
									v-model="value"
									:options="['男', '女']">
								</mt-radio>
					</mt-field>
		        </div>
		        <div class="fpage-button">
					<mt-button  class="fpage_button_edit" @click="login">确认修改</mt-button>
				</div>
		      </mt-tab-container-item>
		      <mt-tab-container-item id="2">
		        <div class="fpage-email">
			  		<div class="baomingbiao_jbxx_liebiao">
			  			<span class="baomingbiao_jbxx_label">登录名</span>
			  			<span class="baomingbiao_jbxx_xm_value">460006196502174512</span>
			  		</div>		        	
		        	<mt-field class="fpage-email_user" label="原始密码" placeholder="请输入原始密码" type="password" v-model="password"></mt-field>
					<mt-field class="fpage-email_user" label="新密码" placeholder="请输入新密码" type="password" v-model="password"></mt-field>
					<mt-field class="fpage-email_user" label="确认新密码" placeholder="请输入新密码" type="password" v-model="password"></mt-field>
		        	<mt-field class="fpage-email_user" label="验证码" placeholder="请输入验证码" v-model="captcha">
  						<img src="static/images/branner1.png" height="45px" width="100px">
					</mt-field>					
		        </div>
		        <div class="fpage-button">
					<mt-button  class="fpage_button_edit" @click="login">确认修改</mt-button>
				</div>
		      </mt-tab-container-item>

		    </mt-tab-container>
	  	</div>		  	    	  
	</div>
</template>

<script>
	export default {
		data () {
			return {
				selected: '1',
				
			}
		},
		created () {
			
		},
		  methods: {
		    onValuesChange(picker, values) {
		    	console.log(11, values)
//		      if (values[0] > values[1]) {
//		        picker.setSlotValue(1, values[0]);
//		      }
		    }
		  },
	}
</script>

<style lang="less">
	.page-view-header{
		width: 100%;
		height: 45px;
		background-color: #383838;
		color: #F2F2F2;
	}
/*	.mint-tab-item-label{
    	padding-left: 16px;
    	font-size: 18px;
    	line-height:40px;
    	
    }*/
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
		padding-top: 50px;   
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
		margin-top: 100px;
    }
		.account .mint-radiolist{
			.mint-radiolist-title{
				display: none;
			}
			display: flex;
		}
		.baomingbiao_jbxx_liebiao{
			border-bottom: 1px solid#C7C7C7;	
			padding-top: 20px;
			height: 48px;
		}
		.baomingbiao_jbxx_label{
			width: 90px;
			
			font-size: 16px;
			color: #101010;
			display:inline-block;  
			padding-left: 27px;
		}
		.baomingbiao_jbxx_xm_value{
			font-size: 16px;
			color: #919191;
			padding-left: 40px;
		}	
		.fpage_img{
			width: 500px;
			height: 100px;
			padding-bottom: 20px;
			display: table-cell; 
	   		vertical-align: middle;
			text-align: center;	
			padding-top: 20px;
			img{border-radius:50%;}
			}		
		.fpage_img_text{
			font-size: 14px;
			color: #BFBFBF;
			text-align: center;
		}

</style>