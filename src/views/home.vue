<template>
  <div class="home">
    <!--<mt-header title="AIOT" class="page-view-header">
      <mt-button icon="back" slot="left" @click="goBack">返回</mt-button>
      <mt-button slot="right">分享</mt-button>
    </mt-header>-->

    	<mt-swipe :auto="3000" class="home_branner">
			  <mt-swipe-item><img src="static/images/branner1.png" class="home_branner_img"/></mt-swipe-item>
			  <mt-swipe-item><img src="static/images/branner2.png" class="home_branner_img"/></mt-swipe-item>
			  <mt-swipe-item><img src="static/images/branner3.png" class="home_branner_img"/></mt-swipe-item>
			</mt-swipe>
   
    	
    
		<div class="home_title home_border">
			<span></span>热门项目
		</div>
		
		<ul>
			<li v-for="(item, index) of homePageData" :key="index" @click="openBaoming(item)">
				<h3 class="home_title_1">{{item.categoryName}}</h3>
				<p class="home_title_2">{{item.model||'报名起止时间：2018年3月28日至2018年4月28日'}}</p>
				<div class="home_item_footer">
					<span class="home_item_footer_botton">{{item.state?'报名中':'名额已满'}}</span>
					<span class="home_item_footer_text">￥80</span>
					<span class="home_item_footer_text1">已报名：52人</span>
					<span class="home_item_footer_text1">剩余名额：{{item.state?28:0}}人</span>
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
	import { Toast } from 'mint-ui';
  export default {
    data () {
      return {
        testData: 'Mon Jan 21 2019 16:12:31 GMT+0800 (中国标准时间)',
        testData1: 1,
//      homePageData: [
//      	{title: '关于举办2019年春季幼儿园园长、保育员专业知识培训班的通知1', baomingTime: '报名起止时间：2018年5月28日至2018年4月28日'},
//      	{title: '关于举办2019年春季幼儿园园长、保育员专业知识培训班的通知2'},
//      	{title: '关于举办2019年春季幼儿园园长、保育员专业知识培训班的通知3'},
//      	{title: '关于举办2019年春季幼儿园园长、保育员专业知识培训班的通知4'},
//      	{title: '关于举办2019年春季幼儿园园长、保育员专业知识培训班的通知5'}
//  		]
				homePageData: []
      }
    },
    computed: {
      testData2 () {
        return this.testData1 + 'sss'
      }
    },
    created () {
	    this.$http.getMessag({}).then(json => {
	    	console.log(111, json)
	    	if (json.code === 200) {
	    		this.homePageData = json.data
	    	} else {
	    		Toast(json.message);
	    	}
	      // 返回处理
	    }).catch(error => {
	      // 异常处理
	      Toast('网络异常，请稍后！');
	    })
    },
    mounted () {
      this.$nextTick(() => {
      })
    },
    methods: {
    	openBaoming (item) {
    		this.$router.push({path: '/details', query: {id: item.id}})
    	},
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
    	height: 130px;
    	.home_branner_img{
    		width: 100%;
    		height: 100%;
    	}
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
    	background-color: #009688;
    	color: #FFFFFF;
    	display:;
    	font-size: 12px;
    	padding-left: 14px;
    	padding-right: 14px;
    	padding-top: 3px;
    	padding-bottom: 4px;
    	border-radius:100px;
    }
    .home_item_footer_text{
    	width: 46px;
    	height: 16px;
    	font-size: 14px;
    	color: #FF3333;
    	padding-left: 25px;
    }
    .home_item_footer_text1{
    	width: 201px;
    	height: 14px;
    	font-size: 12px;
    	color: #BFBFBF;
    	padding-left: 20px;
    }

    .home_button{
      width: 60%;
      margin: 15px 0;
      color: #fff;
      font-size: 20px;
    }
  }
</style>
