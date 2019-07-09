<template>
  <div class="page-view">
    <transition :name="'transition-name-' + (isPageBack ? 'out' : 'in')" v-on:after-enter="routerBeforeEnter">
      <router-view class="page-content"></router-view>
    </transition>
    <mt-tabbar v-model="selected">
		  <mt-tab-item id="首页">
		    <img slot="icon" src="@/common/images/shouye.png">
		    首页
		  </mt-tab-item>
		  <mt-tab-item id="我的报名">
		    <img slot="icon" src="@/common/images/dingdan.png">
		    我的报名
		  </mt-tab-item>
		  <mt-tab-item id="我的缴费">
		    <img slot="icon" src="@/common/images/dingdan.png">
		    我的缴费
		  </mt-tab-item>
		  <mt-tab-item id="我的">
		    <img slot="icon" src="@/common/images/wode.png">
		    我的
		  </mt-tab-item>
		</mt-tabbar>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    computed: {
      ...mapGetters(['isPageBack'])
    },
    watch: {
    	selected (val) {
    		console.log(val)
    		switch (val){
    			case '首页':
    				this.$router.push('/home')
    				break;
    			case '我的报名':
    				this.$router.push('/wodebaoming')
    				break;
    			case '我的缴费':
    				this.$router.push('/wodejiaofei')
    				break;
    			case '我的':
    			this.$router.push('/account')
    				break;
    		}
    	}
    },
    data () {
      return {
        testData: 1,
        selected: '首页'
      }
    },
    created () {},
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      beforeEnter (el) {
        el.style.transitionDuration = '.3s'
      },
      enter (el, done) {},
      routerBeforeEnter (el) {
        this.$store.commit('setIsPageBack', false) // 动画结束之后重置为进入动画
      }
    }
  }
</script>
<style lang="less">
  @import '~@/common/styles/base.less';
  .page-view{
    width: 100%;
    height: 100%;
    .page-content{
    	height: calc(100% - 55px);
    	overflow-x:hidden;
    	overflow-y:auto;
    }
    .page-view-header{
      font-size: 16px;
    }
  }
  .transition-name-out-enter-active,
  .transition-name-out-leave-active,
  .transition-name-in-enter-active,
  .transition-name-in-leave-active {
    will-change: transform;
    transition: all .5s;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .transition-name-out-enter {
    transform: translate3d(-100%, 0, 0);
  }
  .transition-name-out-leave-active {
    transform: translate3d(100%, 0, 0);
  }
  .transition-name-in-enter {
    transform: translate3d(100%, 0, 0);
  }
  .transition-name-in-leave-active {
    transform: translate3d(-100%, 0, 0);
  }
</style>
