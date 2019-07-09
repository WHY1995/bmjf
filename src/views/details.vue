<template>
	<div class="details">
		<mt-header title="项目详情" class="page-view-header">
	    	<mt-button icon="back" slot="left" ></mt-button>
	  	</mt-header>
	  	<div class="details_xmmc">关于海南师范大学2018年下半年自学考试助学班报名的通知</div>
	  	<div class="home_item_footer_text">￥80</div>
	  	<div class="details_xmmc_xnxw">
	  		<span class="details_xmmc_xn">校内</span>
		  	<span class="details_xmmc_xw">校外</span>
	  	</div>
		<div class="details_text">
			<h3 class="details_text_1">开始时间：2019年10月01日 12:00<br/>
结束时间：2019年10月01日 12:00<br/>
已报人数：260人 <br/>
剩余名额：35人<br/>
报名状态：       <br/>
联  系  人：{{detailsData.lianxiren}}<br/>
咨询电话：0898-65811551<br/>


报名须知：<br/>
1、考生仅可在自己就读的专业开考科目中选考1~2门，<br/>
最少一门，最多2门，多选无效。<br/>
2、考试费收取后统一上交海南省考试局，不可退考退<br/>
费，请报考时认真选择。<br/>
3、报读海南师范大学或海南大学为主考院校的学生及中<br/>
职院校学生勿在此报名，本次报考不含此部分学生。<br/></h3>
		</div>
		<div class="">
			<mt-button class="details_button" >立即报名</mt-button>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		data () {
			return {
				detailsData: {lianxiren: '李四'}
			}
		},
		created () {
//			let id = this.$route.query.id
//	        this.$http.queryDetailsData({id: id}).then(data => {
//	        	
//	          // 返回处理
//	        }).catch(error => {
//	          // 异常处理
//	        })
		}
	}
</script>

<style>
	.page-view-header{
		width: 100%;
    	height: 45px;
    	background-color: #383838;
	}
	.details_xmmc{
		height: 53px;
		font-size: 20px;
		color: #414A60;
		line-height:28px;
		padding-top: 20px;
		padding-left: 16px;
	}
    .home_item_footer_text{
    	width: 81px;
    	height: 20px;
    	font-size: 20px;
    	color: #FF3333;
    	padding-left: 16px;
    	padding-top: 40px;
    }	
    .details_xmmc_xnxw{
    	width: 100%;
    	padding-left: 16px;
		margin-top: 25px;
    	padding-top: 10px;    	
    }
    .details_xmmc_xn{
    	padding-left: 16px;
    	width: 65px;
    	height: 25px;
    	background-color: #009688;
    	color: #FFFFFF;
    	font-size: 12px;
    	padding-right: 14px;
    	padding-bottom: 4px;
    	border-radius:100px;
    }    
    .details_xmmc_xw{
    	padding-left: 16px;
    	width: 201px;
    	height: 25px;
    	background-color: #009688;
    	color: #FFFFFF;
    	font-size: 12px;
    	padding-right: 14px;
    	padding-bottom: 4px;
    	border-radius:100px;
    	margin-left: 18px;
    }
    .details_text{
    	padding-left: 16px;
    	padding-top: 30px;
    }
    .details_text_1{
    	font-size: 16px;
    	color: #101010;
    	line-height: 25px;
    }
    .details_button{
    	height: 46px;
    	width: 334px;
    	background-color: #009688;
  		margin-left: 19px;
  		margin-bottom: 20px;
  		margin-top: 20px;
		color: #FFFFFF;
		
    }
</style>