<template>
  <div class="footer">
      <span class="scroll"></span>
      <el-divider></el-divider>
      <span>法律声明</span>
      <el-divider direction="vertical"></el-divider>
      <span>友情链接</span>
      <el-divider direction="vertical"></el-divider>
      <span @click="drawer = true">联系我</span>
      <br/>
      <br/>
      <el-drawer 
        title="联系我"
        :visible.sync="drawer" 
        :direction="direction"
        :before-close="handleClose">
        <p class="info">
          <span class="icon">
            <i class="el-icon-phone"></i>电话：(86)15015852173<br/>
            <i class="el-icon-message"></i>邮箱：sxt954@qq.com<br/>
            <i class="el-icon-cloudy"></i>github：<el-link href="https://github.com/otoyaz" target="_blank">otoyaz</el-link><br/>
          </span>
        </p>
      </el-drawer>
  </div>
</template>

<script>
  export default {
  name:'Footer',
  data(){
    return{
      drawer:false,
      direction:'btt'
    }
  },
  methods:{
    handleClose(done){
      done()
    }
  }
  }
</script>

<style>
  .el-divider{
    background-color: rgb(84, 92, 100);
  }
</style>

<style scoped>
  .footer{
    height:20px;
    text-align:center;
    font-size:16px;
    padding:0px 100px;
    position:relative;
    cursor:pointer;
  }
  .copyright{
    font-size:12px;
  }
  .info{
    font-size:16px;
    color: #72767b;
    line-height: 25px;
  }
  .footer .scroll{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border:1px solid #448aff;
    background-color: rgba(249, 255, 167, 0.2);
    position: absolute;
    left: 5%;
    top: -25px;
    z-index: 10;
    animation: scrollA infinite 20s linear alternate;
  }
  @keyframes scrollA{
      0% {left: 5%;transform: rotate(180deg);};
      10% {left: 5%;transform: rotate(270deg);}
      15% {left: 5%;transform: rotate(450deg);}
      20% {left: 10%;transform: rotate(540deg);}
      25% {left: 20%;transform: rotate(720deg);}
      30% {left: 30%;transform: rotate(900deg);}
      35% {left: 40%;transform: rotate(1080deg);}
      40% {left: 45%;transform: rotate(1260deg);}
      45% {left: 50%;transform: rotate(1440deg);}
      50% {left: 60%;transform: rotate(1620deg);}
      55% {left: 70%;transform: rotate(1800deg);}
      60% {left: 80%;transform: rotate(2340deg);}
      80% {left: 90%;transform: rotate(2790deg);}
      90% {left: 90%;transform: rotate(2520deg);}
      100% {left: 90%;transform: rotate(2610deg);}
  }
  i{
    margin-right: 5px;
  }
</style>