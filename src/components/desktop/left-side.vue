<script>
import Education from "./education.vue";
import Experience from "./experience.vue";
export default {
  components: { Education, Experience },
};
</script>

<template>
  <div class="left"><Education /><Experience /></div>
</template>

<style scoped>
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 720px;
}
</style>
