<template>
	<div class="baomingbiao">
		<mt-header title="报名表" class="page-view-header">
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
	  		<mt-field class="baomingbiao_fjxx" label="毕业学校:" placeholder="请输入毕业学校" v-model="infoData.biyeyuanxiao"></mt-field>
	  		<mt-field class="baomingbiao_fjxx" label="所学专业" placeholder="请输入所学专业" v-model="username"></mt-field>
	  		<mt-field class="baomingbiao_fjxx" label="学历" placeholder="请输入学历" v-model="username"></mt-field>
	  		<mt-field class="baomingbiao_fjxx" label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
	  		<mt-field class="baomingbiao_fjxx" label="户籍" placeholder="请输入户籍" v-model="username"></mt-field>
		</div>
	  	<div class="baomingbiao_jbxx">
		   <span class="baomingbiao_jbxx_noe">3</span>报名项目
		</div>	
		<div class="check_list">
			<div class="check_list_name">
				<mt-checklist id="baomingfei1" v-model="infoData.isSelect"
			  		:options="['普通话考试']">
				</mt-checklist>				
			</div>
		
		</div>
		<div class="check_list">
			<div class="check_list_name">
				<mt-checklist id="baomingfei2" title="" v-model="infoData.isSelect"
			  		:options="['普木木木木木木木',]">
				</mt-checklist>				
			</div>
		
		</div>
		<div class="toa_price">合计: {{allPrice}}</div>
	  	<mt-button class="baomingbiao_button" >立即提交</mt-button>
	</div>
</template>


<script>
	import CheckBox from '@/components/checkbox.vue'
	export default {
		components: { CheckBox },
		data () {
			return {
				infoData: {biyeyuanxiao: '海口大学', isSelect: []},
				baomingfei: [{id: 'baomingfei1', value: 10}, {id: 'baomingfei2', value: 20}]
			}
		},
		computed: {
			allPrice () {
				let toaPrice = 0
				this.baomingfei.forEach(item => {
					toaPrice += item.value
				})
				return toaPrice
			}
		},
		mounted () {
			this.$nextTick(() => {
				this.baomingfei.forEach(item => {
					this.setElement(item.id, item.value)
				})
			})
		},
		methods: {
			setElement (el, value) { // 设置html节点
				let elment = document.createElement('span')
				elment.innerText = value + '元'
				elment.className = 'mint-checkbox-label checklist_price'
				// console.log(document.getElementById(el).getElementsByClassName('mint-checkbox-label')[0].innerHTML='')
				document.getElementById(el).getElementsByClassName('mint-checklist-label')[0].appendChild(elment)
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
		.mint-checkbox-label{
			display: inline-block;
			width: 150px;
		}
		.checklist_price{
			margin-left: 20px;
		}
		.toa_price{
			font-size: 16px;
			color: #101010;
			font-weight: bold;
			padding: 10px 30px;
		}
	}
</style>