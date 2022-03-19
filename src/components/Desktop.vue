<script>
import Details from "./desktop/details.vue";
import Ico from "./desktop/ico.vue";
import LeftSide from "./desktop/left-side.vue";
import RightSide from "./desktop/right-side.vue";
export default {
  components: { Details, Ico, LeftSide, RightSide },
};
</script>

<template>
  <div class="card">
    <div class="card-title"><Details /><Ico /></div>
    <div class="card-body">
      <LeftSide />
      <RightSide />
    </div>
  </div>
</template>

<style scoped>
@import "../assets/base.css";
.card {
  width: 96vw;
  height: 96vh;
  background-color: whitesmoke;
  border-radius: 5px;
  padding: 1rem;
}
.card-title {
  background: #180350;
  background: radial-gradient(
    circle at 30% 107%,
    #040015 0%,
    #09012f 5%,
    #180350 45%,
    #650045 60%,
    #cd006b 90%
  );

  margin: -1rem;
  padding: 1rem;
  display: flex;
  border-radius: 5px 5px 0px 0px;
  justify-content: space-around;
}

.card-body {
  margin-top: 1.5rem;
  padding: 1rem 0rem 0rem 0rem;
  display: flex;
  justify-content: space-around;
}

hr {
  border-style: inset;
  border-width: 1px;
}
</style>
