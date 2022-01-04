<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">新增</el-button>

      <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
        
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
        </el-form>
          <span  slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
      </el-dialog>
   
    <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    
    <el-table-column
      prop="code"
      label="商品编码"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="商品名称"
      width="180">
    </el-table-column>

    <el-table-column
      prop="date"
      label="商品日期"
      width="180">
    </el-table-column>
     <el-table-column
      prop="type"
      label="商品种类"
      width="190">
    </el-table-column>
    <el-table-column
      prop="inventory"
      label="商品库存"
      width="190">
    </el-table-column>
    
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>

     <el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button  @click="handleClick"  type="text" size="small">查看</el-button>
        <el-button type="text" size="small" @click="item">编辑</el-button>
      </template>
    </el-table-column>  
  </el-table>

  <el-pagination
    background
    layout="prev, pager, next"
    :total="100"
    style="float:right; margin-top:30px">
  </el-pagination>

  </div>

</template>



<script>
  export default {
    data() {
      return {
        dialogVisible: false,
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
        },
        tableData: [{
          code: '001',
          name: '王小虎',
          date: '2016-05-02',
          type: '日用品',
          inventory: 100,
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          code: '002',
          name: '王小虎',
          date: '2016-05-02',
          type: '日用品',
          inventory: 100,
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          code: '003',
          name: '王小虎',
          date: '2016-05-02',
          type: '日用品',
          inventory: 100,
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          code: '004',
          name: '王小虎',
          date: '2016-05-02',
          type: '日用品',
          inventory: 100,
          address: '上海市普陀区金沙江路 1518 弄',
        }]
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }, submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleClick(){
         this.$router.push({
          path:'/mallDetail'    
         })
         console.log(11111111);
      },
      item(){
        this.$router.push({
          path:'/mallItem'    
         })
      },
      
    },
  }
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-input__inner{
    width: 300px;
  }
</style>