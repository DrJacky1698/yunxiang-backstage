<template>
  <div>
    <topsubmenu></topsubmenu>

  </div>
</template>

<script>
import Topsubmenu from '@/layout/Topsubmenu.vue'

export default {
  name: "Settings",

  components:{
    Topsubmenu
  },

  data() {
    return {
      form: {},
      timezones: [
        {
          value: "+8",
          label: "中国",
        },
        {
          value: "+13",
          label: "新西兰",
        },
      ],
    };
  },
};
</script>

<style scoped>
.settings {
  max-width: 960px;
}
.submit {
  padding-left: 80px;
}
</style>
