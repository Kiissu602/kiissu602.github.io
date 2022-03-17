<script>
import Details from "./desktop/details.vue";
import Ico from "./desktop/ico.vue";
export default {
  components: { Details, Ico },
};
</script>

<template>
  <div class="card">
    <div class="card-title"><Details /><Ico /></div>
  </div>
</template>

<style scoped>
@import "../assets/base.css";
.card {
  width: 96vw;
  height: 96vh;
  background-color: whitesmoke;
  border-radius: 5px;
  padding: 2rem;
}
.card-title {
  background-color: #283848;
  margin: -2rem;
  padding: 2rem;
  display: flex;
  border-radius: 5px 5px 0px 0px;
  justify-content: space-around;
}
</style>
