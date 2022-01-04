<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="商品编码" prop="code">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="商品名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="商品日期" required>
      <el-col>
        <el-form-item prop="date">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>
        </el-form-item>
      </el-col>  
    </el-form-item>

    <el-form-item label="商品类型" prop="type">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="商品库存" prop="inventory">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="商品地址" prop="address">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item >
    <el-form-item class="buttonStyle">
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">返回</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          code:'',
          name: '',
          date:'',
          type:'',
          inventory:'',
          address:'',
          
        },
        rules: {
          code: [
            { required: true, message: '请输入商品编码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入商品名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          date: [
            { type: 'date', required: true, message: '请选择商品日期', trigger: 'change' }
          ],
          type: [
            { required: true, message: '请输入商品类型', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          inventory: [
            { required: true, message: '请输入商品库存', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输入商品地址', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],                                   
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.$router.push({
          path:'/mall'    
         })
      }
    }
  }
</script>

<style>
  
 .el-input__inner{
    width: 400px;
  }
  .buttonStyle{
    margin-left: 250px;
  }
</style>