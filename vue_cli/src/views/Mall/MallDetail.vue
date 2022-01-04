<template>

  <el-form ref="form" label-width="80px">
    <el-form-item label="商品编码 :">
      <label for="">{{userData.code}}</label>
    </el-form-item>
    <el-form-item label="商品名称:">
      <label for="">{{userData.name}}</label>
    </el-form-item>
    <el-form-item label="商品日期:">
      <label for="">{{userData.date}}</label>
    </el-form-item>
    <el-form-item label="商品类型:">
      <label for="">{{userData.type}}</label>
    </el-form-item>
    <el-form-item label="商品库存:">
      <label for="">{{userData.inventory}}</label>
    </el-form-item>
     <el-form-item label="商品地址:">
      <label for="">{{userData.address}}</label>
    </el-form-item>
    <el-button size="mini" round plain @click="back">返回</el-button>
  </el-form>


</template>

<script>
export default {
  data() {
    return {
      userData:{
          code: '001',
          name: '王小虎',
          date: '2016-05-02',
          type: '日用品',
          inventory: 100,
          address: '上海市普陀区金沙江路 1518 弄',
        }
    }
  },
  methods:{
    back() {
      this.$router.push({
          path:'/mall'    
         })
    }
  }
}
</script>

<style scoped>
  label {
    font-size: 14px;
    color: #606266;
  }
  .el-button {
    margin-left: 250px;
  }
</style>