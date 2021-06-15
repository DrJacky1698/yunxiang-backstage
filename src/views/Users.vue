<template>
  <el-card class="home">
<el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="ID"
      width="150">
    </el-table-column>
    <el-table-column
      prop="fullname"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="username"
      label="用户名">
    </el-table-column>

  </el-table>
  <new-template-dialog
    v-if="row"
    :tid="row"
    :show.sync="dialogVisible"
  />
  <edit-dialog v-if="myrow" :rowdata="myrow" :visible.sync="editDialogVisible"/>
  </el-card>
</template>

<script>
import {getListC} from "@/api/list"
export default {        
  components: {

  },
  data() {
     return {
       row: null,
      dialogVisible: false ,
      editDialogVisible: false,
      tableData: []    
    }
  },
  created() {
    this.getList();
  },
  computed: {
    myrow:{
      get(){
        return this.row
      }
    }
  },
  methods: {
    async getList() {
      const response = await getListC();
      this.tableData = response.data.list;
      console.log(response.data);
    },
      handleClick(row) {
       this.row = row,
       this.dialogVisible = true
        console.log(row);
      },
      handleEditClick(row) {
       this.row = row,
       this.editDialogVisible = true
        console.log(row);
      },
     // 显示dialog
     isDialogVisible(p) {
       this.id.id = p.id,
       this.dialogVisible = true
     },
     onok(){
       console.log('ok');
     }
  }
}
</script>
<style>
.home{
  background-color: #FFF;
}
.toolbar{
  text-align: right;
  padding: 12px;
}
</style>
