<script>
import Image from "./computer/image.vue";
import Name from "./computer/name.vue";
export default {
  components: { Image, Name },
};
</script>

<template>
  <div class="container">
    <div class="contact"><Name /><Image /></div>
  </div>
</template>

<style scoped>
.container {
  height: 1080px;
}
.contact {
  display: flex;
  justify-content: space-around;
}
</style>
