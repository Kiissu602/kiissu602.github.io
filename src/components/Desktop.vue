<script>
import Image from "./desktop/image.vue";
import Details from "./desktop/details.vue";
import Ico from "./desktop/ico.vue";
export default {
  components: { Image, Details, Ico },
};
</script>

<template>
  <div class="container">
    <div class="deatails"><Image /><Details /><Ico /></div>
  </div>
</template>

<style scoped>
.container {
  height: 1080px;
}
.deatails {
  padding: 2rem;
  display: flex;
  justify-content: space-around;
}
</style>
