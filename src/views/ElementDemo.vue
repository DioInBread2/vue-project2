<script setup>
import { ref } from 'vue';
const tableData = [
  {date: '2016-05-03',name: 'Tom1',address: 'No. 189, Grove St, Los Angeles',},
  {date: '2016-05-02',name: 'Tom2',address: 'No. 189, Grove St, Los Angeles',},
  {date: '2016-05-04',name: 'Tom3',address: 'No. 189, Grove St, Los Angeles',},
  {date: '2016-05-01',name: 'Tom4',address: 'No. 189, Grove St, Los Angeles',},
]
const currentPage4 = ref(4);//当前页码
const pageSize4 = ref(100);//每页展示记录数
const total = ref(50);//总记录数
const background = ref(true);//是否有背景色
const handleSizeChange = (val) => {
  console.log(`每页展示:${val} 条`)
}
const handleCurrentChange = (val) => {
  console.log(`当前页码:${val}`)
}
</script>

<template>
    <!-- button -->
   <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>

  <div class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </div>

  <!-- table -->
  <div class="mb-4">
    <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="生日" width="250" />
    <el-table-column prop="name" label="姓名" width="250" />
    <el-table-column prop="address" label="地址" />
  </el-table>
  </div>
  
  <!-- 分页条 -->
   <div class="mb-4">
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[10,20, 30, 40]"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
   </div>
  

</template>

<style scoped>
  .mb-4 {
    margin-bottom: 10px;
  }
</style>
