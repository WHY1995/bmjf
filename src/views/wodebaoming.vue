<template>
  <div class="home">
		<mt-header title="报名管理" class="page-view-header">
      <mt-button icon="back" slot="left" @click="goBack"></mt-button>
    </mt-header>
		<div class="home_title home_border">
			<span></span>报名管理
		</div>
		
		<ul>
			<li >
				<h3 class="home_title_1 ellipsis-2 ">aui-ellipsis-2 aui-ellipsis-2 aui-ellipsis-2 aui-ellipsis-2 aui-ellipsis-2 aui-ellipsis-2 aui-ellipsis-2 关于举办2019年春季幼儿园园长、保育员专业知识培训班的通知</h3>
				<p class="home_title_2">报名起止时间：2018年3月28日至2018年4月28日</p>
				<div class="home_item_footer">
					<span class="home_item_footer_botton">审核通过</span>
					<span class="home_item_footer_botton1">未缴费</span>
				</div>
			</li>
			<li>
				<h3 class="home_title_1">关于举办2019年春季幼儿园园长、保育员专业知识培训班的通知</h3>
				<p class="home_title_2">报名起止时间：2018年3月28日至2018年4月28日</p>
				<div class="home_item_footer">
					<span class="home_item_footer_botton">审核通过</span>
					<span class="home_item_footer_botton1">已缴费</span>
				</div>
			</li>
			<li>
				<h3 class="home_title_1">关于举办2019年春季幼儿园园长、保育员专业知识培训班的通知</h3>
				<p class="home_title_2">报名起止时间：2018年3月28日至2018年4月28日</p>
				<div class="home_item_footer">
					<span class="home_item_footer_botton">审核通过</span>
					<span class="home_item_footer_botton1">已缴费</span>
				</div>
			</li>
			<li>
				<h3 class="home_title_1">关于举办2019年春季幼儿园园长、保育员专业知识培训班的通知</h3>
				<p class="home_title_2">报名起止时间：2018年3月28日至2018年4月28日</p>
				<div class="home_item_footer">
					<span class="home_item_footer_botton">审核通过</span>
					<span class="home_item_footer_botton1">已缴费</span>
				</div>
			</li>
			<li>
				<h3 class="home_title_1">关于举办2019年春季幼儿园园长、保育员专业知识培训班的通知</h3>
				<p class="home_title_2">报名起止时间：2018年3月28日至2018年4月28日</p>
				<div class="home_item_footer">
					<span class="home_item_footer_botton">审核通过</span>
					<span class="home_item_footer_botton1">已缴费</span>
				</div>
			</li>
			<li>
				<h3 class="home_title_1">关于举办2019年春季幼儿园园长、保育员专业知识培训班的通知</h3>
				<p class="home_title_2">报名起止时间：2018年3月28日至2018年4月28日</p>
				<div class="home_item_footer">
					<span class="home_item_footer_botton">审核通过</span>
					<span class="home_item_footer_botton1">已缴费</span>
				</div>
			</li>
		</ul>
		
	
    
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
        testData1: 1
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
      queryData () {
        this.$http.queryData({userName: 'davey', pwd: '1111'}).then(data => {
          // 返回处理
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
  .home{
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
    .home_title{
    	width: 100%;
    	height: 55px;
    	display: flex;
    	align-items: center;
    	font-size: 20px;
    	color:#101010;
    	padding-left: 14px;
    	font-weight:bolder;
    	span{
    		display: inline-block;
    		width: 7px;
    		height: 20px;
    		background-color:#009688;
    		margin-right: 10px;
    	}
    }
    ul li{
			padding: 22px 0;
    	border-bottom: 1px solid #C7C7C7;
    	&:last-child{
    		border-bottom-width: 0;
    	}
    }
    .home_border{
    	border-bottom: 1px solid#C7C7C7;
    }
    .home_title_1{
    	width: 100%;
    	height: 55px;
    	color: #101010;
    	font-size: 18px;
    	padding-left: 14px;
    	padding-right: 14px;
    	line-height:28px;
    	
    }
		.ellipsis-2 {
			display: -webkit-box;
			overflow: hidden;
			text-overflow: ellipsis;
			word-wrap: break-word;
			word-break: break-all;
			white-space: normal !important;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
    
    .home_title_2{
    	width: 100%;
    	height: 14px;
    	padding-left: 14px;
    	margin: 15px 0;
			font-size:14px ;
			color: #7B7B7B;
    }
    .home_item_footer{
    	width: 100%;
    	padding-left: 14px;
			margin-top: 15px;
    	padding-top: 10px;
    }
    .home_item_footer_botton{
    	width: 65px;
    	height: 25px;
    	background-color: #F56C6C;
    	color: #FFFFFF;
    	font-size: 12px;
    	padding-left: 14px;
    	padding-right: 14px;
    	padding-top: 3px;
    	padding-bottom: 4px;
    	border-radius:100px;
    }
    .home_item_footer_botton1{
    	width: 65px;
    	height: 25px;
    	background-color: #1EA497;
    	color: #FFFFFF;
    	font-size: 12px;
    	padding-left: 14px;
    	padding-right: 14px;
    	padding-top: 3px;
    	padding-bottom: 4px;
    	border-radius:100px;
    	margin-left: 20px;
    }

  }
</style>
