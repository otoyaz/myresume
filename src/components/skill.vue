<template>
  <div class="myskill">
      <div class="title">
          <el-divider content-postion="center">个人技能</el-divider>
          <p><el-tag>xxx</el-tag><el-tag>xxx</el-tag></p>
      </div>
      <div class="skillList">
          <span class="vue">Vue</span>
          <span class="js">JavaScript</span>
          <span class="css">CSS</span>
          <span class="PS">PS</span>
          <span class="PS">PS</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'mySkill'
}
</script>
<style>
    .myskill .title p .el-tag{
        margin: 0px 5px;
        cursor: pointer;
    }
    .myskill .box-card .text{
        text-align: left;
    }
</style>

<style scoped>
    .myskill{
        font-size: 14px;
        padding: 0px 100px;
    }
    .title p{
        color: #8c8888;
        font-size: 15px;
        margin-bottom: 80px;
        text-align: center;
    }
    .content p{
        font-size: 20px;
        color: #8c8888;
    }
    .skillList{
        margin: 100px 0px;
        position: relative;
    }
    .skillList span{
        display: inline-block;
        color:#fff;
        border-radius: 50%;
    }
    span.vue{
        background-color: rgba(102, 153, 204, 1);
        width: 200px;
        height: 200px;
        line-height: 200px;
        font-size: 28px;
        z-index: 100;
    }
    span.js{
        background-color: rgb(255, 153, 102, 0.5);
        width: 130px;
        height: 130px;
        line-height: 130px;
        font-size: 26px;
        position:absolute;
        left: 43%;
        bottom:150px;
        z-index: 0;
    }
    span.css{
        background-color: rgba(102,204,204,0.8);
        width: 90px;
        height: 90px;
        font-size: 26px;
        line-height: 90px;
        font-size: 26px;
        position: absolute;
        left: 35%;
        top: 100px;
        z-index: 0;
    }
    span.PS{
        background-color: rgba(102,204,204,0.8);
        width: 60px;
        height: 60px;
        font-size: 11px;
        line-height: 90px;
        font-size: 20px;
        position: absolute;
        left: 45%;
        top: 200px;
        z-index: 0;
    }
</style>