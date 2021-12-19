<template>
  <div>

    <el-button type="primary">新增</el-button>
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
      label="送货地址">
    </el-table-column>

     <el-table-column
      fixed="right"
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button  @click="handleClick"  type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
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

<style>
  .el-table .warning-row {
    background: oldlace;
  
    
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      handleClick(){
         this.$router.push({
          path: `/mall/mallDetail`    
         })
         console.log(11111111);
      }
    },
    data() {
      return {
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
    }
  }
</script>