<script>
import Ico from "../desktop/ico.vue";
export default {
  components: { Ico },
};
</script>

<template>
  <div class="con-box">
    <div class="con">Contact</div>
    <div><Ico /></div>
  </div>
</template>

<style scoped>
.con {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1rem;
}

.con-box {
  width: 95%;
  min-width: 269px;
}
</style>
