<template>
  <el-container>
    <el-aside width="auto"><CommonAside/></el-aside>
    
    <el-container>
      <el-header>
        <CommonHeader/>
      </el-header>

     <common-tag></common-tag>
      
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'
export default {
  name: 'Main',
  components: { CommonAside ,CommonHeader,CommonTag}
}
</script>

<style  scoped>
  .el-header{
    background-color: #333;
  }

  .el-main{
    padding-top: 0;
  }
  .el-container{
    padding: 0;
    margin: 0;
    height: 100%;
  }

</style>
