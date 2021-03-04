<template>
  <div class="productpage">
      <div class="title">
        <el-divider content-position="center">个人经历</el-divider>
      </div>
      <div class="experience">
        <el-timeline>
            <el-timeline-item timestamp="2017.10-2020.05" placement="top">
                <el-card>
                    <h3>学校组织负责人</h3>
                    <h4>2017.10-2018.05 学生自律委员会办公室委员</h4>
                    <p>主要负责：协助老师进行文表制作，数据统计分析，制作协会活动推送，协助完成组织活动。</p>
                    <h4>2017.10-2018.06 学生动漫社绘画部社员</h4>
                    <p>主要负责：利用ps、sai2设计绘画社团海报，制作活动推送。<br>与协会成员一同努力布置场地，制作手工艺品，顺利在万达广场举办动漫嘉年华活动。</p>
                    <h4>2018.10-2019.05 学生自律委员会办公室部长</h4>
                    <p>主要负责：工作的上传下达，协调组织部门活动，文件资料整理等。<br>在两位同事的帮助下，建成了组织内最团结部门，并成功进行为期两天一夜的春游活动。</p>
                    <h4>2019.10-2020.10 心理健康教育协会主席</h4>
                    <p>主要负责：撰写活动策划，活动实施与跟进，组织的宣传招聘活动（安排工作人员拍照、站点、取景、彩排、制作活动推送）。<br>
                      在资源缺乏与疫情影响的情况下，筹划多次线上活动(心理演讲大赛、心理健康班会等）均取得较大成果。</p>
                    <img src="../assets/photo/聘书.jpg" alt="">
                </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2017.10-2018.06" placement="top">
              <el-card>
                <h3>社会公益者</h3>
                <p>在校期间，累积义工时244小时。空闲时间会时不时参与义工活动。并获得一级义工证书</p>
                <img src="../assets/photo/义工时.png" alt="" style="height:400px">
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020.09-2020.11" placement="top">
              <el-card>
                <h4>参与IBM全栈工程师培训</h4>
                <p>通过市场两个月的培训，<br>
                  掌握HTML、CSS、JavaScript技术、Vue框架及其类库使用；<br> 
                  熟悉jQuery、Bootstrap、Element-ui框架的使用； <br>
                  了解Git操作方法；了解C/C++、JAVA、SQL语言。<br>
                </p>
                <img src="../assets/photo/培训.jpg" alt="">
              </el-card>
            </el-timeline-item>
        </el-timeline>
      </div>
      <div class="project">
        <div class="content" @click="drawerHander(1)">
          <img src="../assets/photo/义工时.png" class="ifns">
          <div class="hover">
            <p>个人博客</p>
          </div>
        </div>
      <div class="content" @click="drawerHander(2)">
        <img src="../assets/photo/义工时.png" class="ifns">
        <div class="hover">
          <p>图书管理系统</p>
        </div>
      </div>
      <div  class="content" @click="drawerHander(3)">
        <img src="../assets/photo/义工时.png" class="ifns">
        <div class="hover">
          <p>个人简历</p>
        </div>
      </div>
    </div>
    <el-drawer :title="projectInfo[currentIndex]['title']"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose">
      <p class="info">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              项目介绍：{{projectInfo[currentIndex]['intro']}}
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              职责描述：
            </div>
            <div class="grid-content bg-purple-dark" v-for="(item,key) in projectInfo[currentIndex]['responsibility']" :key="key">
              {{projectInfo[currentIndex]['responsibility'][key]}}
            </div>
          </el-col>
        </el-row>
      </p>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name:'Pass',
  data(){
    return{
      drawer:false,
      direction:'btt',
      currentIndex:0,
      projectInfo:[
        {
          title:'个人博客',
          intro:'项目介绍',
          responsibily:{
            res1:'1',
            res2:'2'
          }
        },{
          title:'deede',
          intro:'VVA',
          responsibily:{
            res1:'3',
            res2:'4'
          }
        },{
          title:'个人博客',
          intro:'项目介绍',
          responsibily:{
            res1:'1',
            res2:'2'
          }
        }
      ]
    }
  },
  methods:{
    handleClose(done){
      done()
    },
    drawerHandeer(index){
      this.drawer = true
      this.currentIndex = index - 1
    }
  }
};
</script>

<style>
  div .el-divider--horizontal{
    height: 2px;
    margin-top: 100px;
    background-image: linear-gradient(125deg,#fff,pink,rgb(166, 166, 255),#fff)
  }
  div .el-divider__text{
    font-size:26px;
    color:#545c64;
  }
  div .el-drawer__header{
    font-size: 20px;
    font-weight: blod;
    padding-bottom: 20px;
    border-bottom:1px solid;
  }
  div el-drawer{
    background-color: rgb(61, 67, 72);
    color: #ccc;
  }
  div .el-drawer__body{
    padding:0px 20px 0px 20px;
  }
</style>

<style scoped>
  .productpage{
    padding: 0px 100px 0px 100px;
  }
  .productpage .project{
    display: flex;
    justify-content:space-around;
  }
  .ifns{
    width:85%;
    display: inline-block;
    outline: 1px dashed rgba(84, 92, 100, 0.1);
  }
  .experience{
    text-align: left;
  }
  .content{
    text-align: center;
    display: inline;
    position: relative;
    margin: 20px;
  }
  .content p{
    width: 95%;
    color: #fff;
    font-size: 14px;
    text-align: center;
  }
  .hover{
    position: absolute;
    bottom: 5px;
    left: 7.5%;
    background-color: rgba(84, 92, 100, 0.3);
    height: 60px;
    width: 85%;
    line-height: 60px;
    cursor: pointer;
  }
  .hover:hover{
    background-color: rgba(84, 92, 100, 0.6);
  }
  h1{
    border:1px solid #ccc;
    height: 0px;
  }
  .title p{
    color: #8c8888;
    font-size: 15px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .title p .el-tag{
    margin: 0px 5px;
    cursor: pointer;
  }
  .info{
    font-size: 14px;
    color: #72767b;
    line-height: 25px;
  }
  img{
    width: 400px;
    height: 200px;
  }
</style>