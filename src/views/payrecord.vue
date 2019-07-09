<template>
  <div class="login">
    <mt-header title="缴费单据" class="page-view-header">
      <mt-button icon="back" slot="left" @click="goBack"></mt-button>
    </mt-header>
    <div class="OrderDiv">
       <p class="title">{{title}}</p>
       <p class="orderNumber">订单编号：{{OrderNumber}}</p>
    </div>
    <div class="listDiv">
       <p class="payList">缴费项目</p>
       <ul class="ulDIV">
          <li class="liDIV" v-for="(item, index) of homePageData" :key="index">
            <p class="TestType">{{item.title}}</p>
            <p class="TestMoney">{{item.money}}元</p>
          </li>
      </ul>
    </div>
    <p class="moneyDIV">订单金额：{{total}}元</p>
    <div class="payDIV">
        <p class="payIMG"><img class="pic" src="static/images/ring.png"/></p>
        <p class="imforDIV">温馨提示：请在支付之前确认好信息有无错误，一旦提交无法撤回。</p>
    </div>
    <div class="PayRight" @click="pay">
        立即支付
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import {Toast} from 'mint-ui'
  export default {
    data () {
      return {
        testData: 'Mon Jan 21 2019 16:12:31 GMT+0800 (中国标准时间)',
        title:"2019年4月份自学考试琼台主考专业统考课程考试科目报考-缴费单据",
        OrderNumber:'201980565412875',
        homePageData: [
          {title: '普通话',money:10.00}, 
          {title: '英文等级',money:15.00},
          {title: '音乐艺术',money:20.00},
          {title: '计算机等级',money:1000.00},
          {title: '基本功',money:0.00}
        ]

      }
    },
    computed: {
      testData2 () {
        return this.testData1 + 'sss'
      },
      total(){
        let sum = 0;
        if(!this.homePageData){
          return;
        }
        this.homePageData.forEach((item) => {
           //遍历prodAllPrice这个字段，并累加
           sum += item.money;
         });
        //返回
        
        return sum;
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
      phoneFind(){
        this.$router.push('/pfind')
      },
      EmailFind(){
        this.$router.push('/EmailFind')
      },
      pay(){
        
        axios.get("http://127.0.0.1:4000/pay",{
           params:{
             sumMoney:this.sumMoney
           }
        }).then((response)=>{
           let res=response.data;
           console.log(res);
           if(res.code===0){
             Toast({
               message:'支付成功!',
               iconClass: 'mintui mintui-success',
               duration:2000
             });
           }else{
             Toast({
               message:'支付失败！',
               iconClass: 'mintui mintui-success',
               duration:2000
             });
           }
        });
      },
      queryData () {
        this.$http.queryData({userName: 'davey', pwd: '1111'}).then(data => {
          // 返回处理
        }).catch(error => {
          // 异常处理
        })
      },
      send(){
        const{Pnumber}=this;
        if(!(/^1[34578]\d{9}$/.test(Pnumber)))
        {
           alert("请输入正确的手机号码");
           return;
        }
        axios.get("http://127.0.0.1:4000/sendMessage",{
          params:{
              phoneNumber:this.Pnumber,
          }
          }).then((response)=>{
              let res = response.data;
              console.log(res);
              if(res.code===0){
                Toast({
                  message: '发送成功',
                  iconClass: 'mintui mintui-success',
                  duration: 2000
                });
              }else{
                Toast({
                  message: '发送失败,请再次点击发送！',
                  iconClass: 'mintui mintui-success',
                  duration: 2000
                });
              } 
          });
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
  .login{
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
    .OrderDiv{
      height:160px;
      border:1px solid #E6E6E6;
    }
    .title{
      font-size:22px;
      margin-top:20px;
      color:#414A60;
      line-height:35px;
      margin-left:13px;
    }
    .orderNumber{
      color:#9FA3B0;
      font-size:18px;
      margin-top:20px;
      margin-left:13px;
    }
    .listDiv{
      border:1px solid #E6E6E6;
    }
    .payList{
      font-size:25px;
      margin-left:13px;
      font-weight:bold;
      margin-top:30px;
      color:#414A60;
    }
    .ulDIV{
      margin-bottom:30px;
      margin-top:30px;
    }
    .liDIV{
      height:50px;
      margin-left:13px;
      line-height:50px;
    }
    .TestType{
      display:inline-block;
      color:#101010;
      width:40%;
      font-size:18px;
    }
    .TestMoney{
      display:inline-block;
      font-size:18px;
    }
    .moneyDIV{
      font-size:23px;
      margin-left:13px;
      margin-top:30px;
    }
    .payDIV{
      height:100px;
      width:96%;
      margin:50px auto;
      backgound:#FFF1F0;
      border:1px solid #FFA39E;
      border-radius:5px;
      background-color:rgba(255,241,240,1);
    }
    .payIMG{
      display:inline-block;
      width:15%;
    }
    .pic{
      width:50px;
      height:55px;
      margin:-7px 0px;
    }
    .imforDIV{
      display:inline-block;
      font-size:16px;
      width:80%;
      margin:18px auto;
      color:#393D49;
      line-height:30px;
    }
    .PayRight{
      width:90%;
      height:50px;
      background-color:#E51C23;
      border-radius:5px;
      color:white;
      text-align:center;
      line-height:50px;
      font-size:18px;
      margin:30px auto;
    }
  }
</style>
