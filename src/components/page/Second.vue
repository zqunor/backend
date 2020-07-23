<template>
  <div class="wrapper">
    <hr />
    <br />
    <p>{{message}}</p>
    <el-container>
    <!-- 主要区域容器 -->
        <el-main>
          <!-- 表格 -->
          <el-table :data="tableData" style="border: 1px solid #eee">
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="mobile" label="手机号"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
  </div>
</template>
<script>
  import Bus from "../../utils/bus";
  export default {
    data() {
      return {
        message: "",
        tableData: {},
      };
    },
    mounted() {
      let self = this;
      Bus.$on("msg", (e) => {
        self.message = e;
      });

      Bus.$on("data", (item) => {
        self.tableData = item;
      });
    },
  };
</script>