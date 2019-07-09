<template>
	<div class="baomingbiao">
		<mt-header title="报名表单确认" class="page-view-header">
	    	<mt-button icon="back" slot="left" ></mt-button>
	  	</mt-header>		
	  	<div class="baomingbiao_img">		
	  		<img src="static/images/branner1.png" height="100px" width="100px" style="border-radius: 50%;" />
	  	</div>
	  	<div class="baomingbiao_jbxx">
	  		<span class="baomingbiao_jbxx_noe">1</span>基本信息
	  	</div>
	  	<div class="baomingbiao_jbxx_1">
	  		<div class="baomingbiao_jbxx_liebiao">
	  			<span class="baomingbiao_jbxx_label">姓名</span>
	  			<span class="baomingbiao_jbxx_xm_value">张三丰</span>
	  		</div>
	  		<div class="baomingbiao_jbxx_liebiao">
	  			<span class="baomingbiao_jbxx_label">身份证号</span>
	  			<span class="baomingbiao_jbxx_xm_value">460006196502174512</span>
	  		</div>	  		
	  		<div class="baomingbiao_jbxx_liebiao">
	  			<span class="baomingbiao_jbxx_label">性别</span>
	  			<span class="baomingbiao_jbxx_xm_value">男</span>
	  		</div>
	  		<div class="baomingbiao_jbxx_liebiao">
	  			<span class="baomingbiao_jbxx_label">电话号码</span>
	  			<span class="baomingbiao_jbxx_xm_value">13558447568</span>
	  		</div>	  
	  		<div class="baomingbiao_jbxx_liebiao">
	  			<span class="baomingbiao_jbxx_label">邮箱</span>
	  			<span class="baomingbiao_jbxx_xm_value">5566565@qq.com</span>
	  		</div>		
	  	</div>
	  	<div class="baomingbiao_jbxx">
		   <span class="baomingbiao_jbxx_noe">2</span>附加信息
		</div>	
		<div class="baomingbiao_jbxx_1">
	  		<div class="baomingbiao_jbxx_liebiao">
	  			<span class="baomingbiao_jbxx_label">毕业学校</span>
	  			<span class="baomingbiao_jbxx_xm_value">海口经济学院</span>
	  		</div>
	  		<div class="baomingbiao_jbxx_liebiao">
	  			<span class="baomingbiao_jbxx_label">所学专业</span>
	  			<span class="baomingbiao_jbxx_xm_value">计算机科学与技术</span>
	  		</div>	  		
	  		<div class="baomingbiao_jbxx_liebiao">
	  			<span class="baomingbiao_jbxx_label">学历</span>
	  			<span class="baomingbiao_jbxx_xm_value">本科</span>
	  		</div>
	  		<div class="baomingbiao_jbxx_liebiao">
	  			<span class="baomingbiao_jbxx_label">出生年月</span>
	  			<span class="baomingbiao_jbxx_xm_value">1993年5月</span>
	  		</div>	  
	  		<div class="baomingbiao_jbxx_liebiao">
	  			<span class="baomingbiao_jbxx_label">户籍</span>
	  			<span class="baomingbiao_jbxx_xm_value">广东河源</span>
	  		</div>		
	  	</div>
	  	<div class="baomingbiao_jbxx">
		   <span class="baomingbiao_jbxx_noe">3</span>报名项目
		</div>	
		<div class="confirm_xiangmu">
			<div class="confirm_xiangmu_1">
		  		<span class="confirm_xiangmu_label">普通话</span>
		  		<span class="confirm_xiangmu_value">10元</span>					
			</div>
			<div class="confirm_xiangmu_1">
		  		<span class="confirm_xiangmu_label">英语等级</span>
		  		<span class="confirm_xiangmu_value">15元</span>					
			</div>		
		</div>
		<div class="confirm_heji">
			合计：25元
		</div>
		<div class="confirm-button">
			<mt-button  class="confirm-button_1" >返回修改</mt-button>
			<mt-button  class="confirm-button_2" >确认提交</mt-button>			
		</div>

	</div>
</template>


<script>
	import CheckBox from '@/components/checkbox.vue'
	export default {
		components: { CheckBox },
		data () {
			return {
				infoData: {biyeyuanxiao: '海口大学', isSelect: []}
			}
		}
	}
</script>

<style lang="less">
	.baomingbiao{
		.page-view-header{
			width: 100%;
			height: 45px;
			background-color: #383838;
			color: #F2F2F2;
		}

		.baomingbiao_img{
			width: 100%;
			height: 156px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 40px;
			padding-top: 0px;
			border-bottom: 1px solid #F9F9F9;
		}
		.baomingbiao_jbxx{
			width: 100%;
			height: 38px;
			font-size: 16px;
			color: #101010;
			padding-left: 16px;
			font-weight: bolder;
			border-bottom: 1px solid #C7C7C7;
		}
		.baomingbiao_jbxx_noe{
			color: #009688;
			font-size: 30px;
			padding-right: 14px;
			
		}
		.baomingbiao_jbxx_1{
			margin-top: 20px;
			padding-bottom: 20px;
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
			text-align: right;
		}
		.baomingbiao_jbxx_xm_value{
			font-size: 16px;
			color: #919191;
			padding-left: 20px;
		}
		.baomingbiao_fjxx{
			border-bottom: 1px solid#C7C7C7;
			width: 100%;
			font-size: 16px;
		}
		.baomingbiao_field_border{
			padding-left: 16px;
			width: 100%;
			border-bottom: 1px solid#C7C7C7;		
		}
	    .baomingbiao_button{
	    	width: 334px;
	    	height: 46px;
	    	background-color: #009688;
	  		margin-left: 17px;
	  		margin-bottom: 20px;
	  		margin-top: 20px;
			color: #FFFFFF;
		}
		.mint-cell-wrapper{
			padding: 0;
			.mint-cell-title{
				width: 90px;
				
				font-size: 16px;
				color: #101010;
				display:inline-block;  
				text-align: right;
			}
			.mint-cell-value{
				font-size: 16px;
				color: #919191;
				padding-left: 20px;
				padding-right:10px;	
				i{
					font-size: 20px;
				}
			}
		}
		.mint-checklist-title{
			height: 50px;
			margin-top: -72px;
		}
		.mint-checklist-label{
			text-align: left;
		}
		.mint-cell-title{
				text-align: left;
				padding-left: 20px;
				.mint-checkbox-core{
					border-radius: 2px;
				}
			}
		.check_list{
			width: 100%;
			height: 50px;
		

		}
		.check_list_name{
			width: 500px;
			height: 50px;
			text-align:left;
	
			display:inline-block;  
			font-size:18px;
			padding-top: 16px;
			float:left;
			

		}
		.check_list_pice{
			float:left;
			font-size:18px;
			padding-top: 0px;		
			padding-left: 40px;	
		}
		.confirm_xiangmu{
			padding-top: 20px;
		}
		.confirm_xiangmu_label{
			width: 120px;
			height: 28px;
			display:inline-block;  
			padding-left: 25px;
			font-size: 14px;
			color: #101010;
		}
		.confirm_xiangmu_value{
			width: 50px;
			font-size: 14px;
			color: #101010;
			padding-left: 30px;			
		}
		.confirm_xiangmu_1{	
			padding-top: 20px;
			height: 48px;
		}
		.confirm_heji{
			padding-top: 30px;
			padding-left: 25px;
			font-size: 16px;
			color:#101010;
			font-weight: bolder;
		}
		.confirm-button{
			padding-top: 35px;
			padding-bottom: 30px;
		}
		.confirm-button_1{
			width: 160px;
			height: 46px;
			background-color: #009688;
			color: #FFFFFF;
			margin-left: 18px;
		}
		.confirm-button_2{
			width: 160px;
			height: 46px;
			background-color: #FF4081;
			color: #FFFFFF;
			margin-left: 18px;
		}
		
    }
</style>