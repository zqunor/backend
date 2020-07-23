<template>
  <div class="wrapper">
    <hr />
    <br />
    <button @click="send">send</button>
  </div>
</template>
<script>
  import Bus from "../../utils/bus";

  export default {
    data() {
        const item = {
            date: "2019-09-17",
            name: "shiyanlou",
            address: "四川省成都市",
            mobile: "18188888888"
        };
        return {
            message: "",
            tableData: Array(10).fill(item)
        };
    },
    methods: {
      send() {
        this.message = "这是传递到 second 中的数据!";
        Bus.$emit("msg", this.message);
        Bus.$emit("data", this.tableData);
      },
    },
  };
</script>