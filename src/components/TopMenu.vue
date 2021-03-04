<template>
<div>
  <div class="menupage">
    <el-menu 
      :default-active="activeIndex"
      mode="horizontal"
      class="el-menu-demo"
      background-color="#54C0A6"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
     >
      <p class="logo-title"><i class="el-icon-user"></i>otoyaz</p>
      <el-menu-item>
        <el-image class="admin" :src="require('../assets/photo/otoyaz.jpg')">
        </el-image>
      </el-menu-item>
      <el-menu-item index="1" style="margin-left:400px">首&nbsp;页</el-menu-item>
      <el-menu-item index="2">个人简介</el-menu-item>
      <el-menu-item index="3">个人技能</el-menu-item>
      <el-menu-item index="4">个人经历</el-menu-item>
    </el-menu>
  </div>
  <div >
    <audio id="audio" :src="require('../assets/music/菊次郎的夏天.mp3')"></audio></div>
  </div>
</template>

<script>
export default {
  name: 'topMenu',
 data(){
   return {
     activeIndex:'1'
   }
  },
  mounted(){
    let oAudio = document.querySelector("#audio");
    oAudio.onended = function(){
      oAudio.load();
      oAudio.play();
    };
    this.audioAutoPlay()
  },
  methods:{
    handleSelect (index, indexPath){
      var name = ''
      if(index === '1') name = 'HomePage'
      if(index === '4') name = 'Pass'
      if(index === '3') name = 'mySkill'
      if(index === '2') name = 'aboutMe'
      var targetEle = document.querySelector('.' + name)
      var offsetTop = targetEle.offsetTop
      document.documentElement.scrollTop = offsetTop - 150
    },
    audioAutoPlay(){
      let audio = document.getElementById("audio");
      audio.play();
      document.removeEventListener("touchstart",this.audioAutoPlay);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .menupage{
    position: fixed;
    width: 100%;
    top:0;
    z-index:200;
  }
  .admin{
    width:55px;
    height:55px;
    border-radius:60px;
    top: 0;
  }
  .menupage .el-menu-item{
    padding-right: 30px;
    font-size: 20px;
  }
  .menupage .logo-title .el-icon-user{
    margin-left: 5px;
    margin-right: 5px;
  }
  .menupage .el-menu.el-menu--horizontal{
    border-bottom: none;
    height: 100px;
    line-height: 100px;
  }
  .menupage .el-menu.el-menu--horizontal>.el-menu-item,.menupage .el-menu--horizontal>.el-submenu .el-submenu__title{
    height: 100px;
    line-height: 100px;
    padding: 0px 50px;
    font-size: 16px;
    letter-spacing: 4px;
  }
  .menupage .el-menu--horizontal>.el-menu-item.is-active,.menupage .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
    border-bottom-width: 4px;
  }
</style>

<style scoped>
  .logo-title{
    position: absolute;
    left:100px;
    top:0px;
    color:#fff;
    font-size: 20px;
    cursor: pointer;
  }
  .logo-title img{
    width: 80px;
    outline:none;
    vertical-align: middle;
  }
  .music{
    float: right;
    padding: 0px;
    margin: 8px 50px 0px 0px;
    font-size: 30px;
    color: rgb(255, 255, 255);
  }
</style>