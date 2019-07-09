<template>
  <div class="images-list">
    <ul>
      <li @click="goBack"><img src="static/images/1.jpeg"></li>
      <li><img src="static/images/2.png"></li>
      <li><img src="static/images/3.jpeg"></li>
      <li><img src="static/images/4.png"></li>
      <li><img src="static/images/5.jpeg"></li>
      <li><img src="static/images/6.jpeg"></li>
      <!-- <li><img v-lazy="'static/images/1.jpeg'"></li>
      <li><img v-lazy="'static/images/2.png'"></li>
      <li><img v-lazy="'static/images/3.jpeg'"></li>
      <li><img v-lazy="'static/images/4.png'"></li>
      <li><img v-lazy="'static/images/5.jpeg'"></li>
      <li><img v-lazy="'static/images/6.jpeg'"></li> -->
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      showToast(){
        this.$toast({ message: '操作成功', position: 'bottom', duration: 1000})
      },
      goBack () {
        this.$store.commit('setIsPageBack', true) // 动画结束之后重置为进入动画
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="less">
  .images-list{
    width: 100%;
    height: calc(~"100vh - " 40px);
    font-size: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: auto;
    ul{
      width: 100%;
      height: 100%;
      li{
        width: 100%;
        height: auto;
        padding: 40px;
        img{width: 100%;}
      }
    }
  }
</style>
