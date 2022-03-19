<script>
import Programing from "./programing.vue";
import Framework from "./framework.vue";
import Other from "./other.vue";
export default {
  components: { Programing, Framework, Other },
};
</script>

<template>
  <div class="skill-box">
    <span class="title">Skills</span>
    <div class="top"><Programing /><Other class="oth" /></div>
    <Framework class="fw" />
  </div>
</template>

<style scope>
.skill-box {
  padding: 2rem;
  width: 720px;
}
.title {
  font-size: 20px;
  font-weight: bold;
}
.top {
  display: flex;
  margin-top: 1rem;
}
.fw {
  margin-top: 1rem;
}
.oth {
  margin-left: 4rem;
}
</style>
