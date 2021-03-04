<template>
  <div class="aboutme">
    <div class="title">
      <el-divider content-position="center">个人简介</el-divider>
      <p><el-tag>佛系少女</el-tag><el-tag>佛系少女</el-tag></p>
    </div>
    <el-card class="box-card1" style="margin-bottom:10px;">
      <div class="text item1">
        <el-row :gutter="50">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <p><i class="el-icon-user-solid"></i>姓&nbsp;名：邵禧彤</p>
              <p><i class="el-icon-location-outline"></i>现住地址：佛山</p>
              <p><i class="el-icon-phone"></i>电&nbsp;话：15015852173</p>
              <p><i class="el-icon-message"></i>邮&nbsp;箱：sxt954@qq.com</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <p><i class="el-icon-user-solid"></i>民&nbsp;族：汉族</p>
              <p><i class="el-icon-edit"></i>意向职业：前端工程师</p>
              <p><i class="el-icon-s-management"></i>学&nbsp;历：本科</p>
              <p><i class="el-icon-thumb"></i> github：<a href="https://github.com/otoyaz">otoyaz</a></p>
            </div>
          </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple">
                <img src="../assets/photo/otoyaz.jpg" style="width:150px">
              </div>
           </el-col>
           <el-col :span="3">
              <div class="grid-content bg-purple">
                <img src="../assets/photo/otoyaz.jpg" style="width:150px">
              </div>
           </el-col>
        </el-row>
        <div class="topMask triangle"></div><div class="topMask smalltriangle"></div>
      </div>
    </el-card>
    <el-divider></el-divider>
    <el-card class="box-card2" style="margin-bottom:20px;">
      <div class="text item">
        <el-row :gutter="110">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <p>五邑大学，2021届应届毕业生。在校专业：通信工程（计算机通信网络），主修课程有：C/C++语言程序设计、面向对象程序设计(JAVA)、数据库系统原理、大学英语、Web程序设计、数据结构与算法、离散数学、通信原理、计算机网络原理。</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
             <p>在校期间，曾担任三年学生干部，有较强的工作效率和责任心。在大二下学期顺利获得大学四级英语证书，在大三上学期考取日语N1级以四分之差惜败。
            </p> 
            </div>  
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
            <p>主要技能为C/C++,html语言,和培训的小伙伴一起完成过图书管理系统(管理员对书籍信息增删查改、用户对图书的查询借阅功能、管理员限权赋予等)</p>
          </el-col>
        </el-row>
      </div>
      <div class='topMask square'></div><div class='topMask circular'></div><div class='topMask small'></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name:'aboutMe'
}
</script>

<style>
  .aboutme .grid-content.line{
    border-right: 1px solid #ddd;
    height: 150px;
  }
  /* .aboutme .el-card__header{
    background: #4d8cca;
  }
  .aboutme .el-card__body {
    padding: 30px 20px;
  } */
  .aboutme .el-timeline-item__wrapper{
    top: -8px;
  }
  .aboutme .title p .el-tag{
    margin: 0px 5px;
    cursor: pointer;
  }
</style>
<style scoped>
  .aboutme .el-divider{
    background-image: linear-gradient(125deg,#fff,pink,rgb(166, 166, 255),#fff);
  }
  .profile{
    font-size: 14px;
    text-align: left;
    padding: 0px 100px;
  }
  .intro{
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .text {
    font-size: 16px;
    text-align: left;
    line-height: 30px;
    text-indent: 2em;
  }
  .box-card1 .text{
    line-height: 18px;
  }
  .box-card1{
    position: relative;
    height: 200px;
    margin: 0 200px;
  }
  .box-card2{
    position: relative;
    margin: 0 200px;

  }
  .item {
    display: inline-block;
    margin: 30px 50px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .clearfix span{
    color: #fff;
    font-weight: bold;
  }
  .title p{
    color: #8c8888;
    font-size: 15px;
    margin-bottom: 80px;
    text-align: center;
  }
  .grid-content .large{
    font-size: 16px;
    color: #409EFF;
    font-weight: bold;
  }
  .topMask{
    width: 150px;
    height: 150px;
    background-color: rgba(85, 216, 114, 0.2);
    transform: rotate(45deg);
    position: absolute;
  }
  .triangle{
		width: 0px;
		height: 0px;
    margin-left: 550px;
		border: 150px solid rgba(255, 72, 72, 0.425) ;
  }
  .smalltriangle{
    width: 130px;
    margin-left: 450px;
    background-color: rgba(245, 242, 82, 0.315);
    border: 10px solid rgba(255, 100, 100, 0.199) ;
  }
  .square{
    border-radius: 15px;
    top: 0px;
  }
  .circular{
    border-radius: 50%;
    top:80px;
    left: 80%;
    background-color: rgba(255, 220, 123, 0.2);
  }
  .small{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top:200px;
    left: 80%;
    background-color: rgba(238, 255, 87, 0.2);
  }
</style>
