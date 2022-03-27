<script>
import Image from "./image.vue";
export default {
  components: { Image },
};
</script>
<template>
  <div class="details-box">
    <div>
      <Image />
    </div>
    <div class="details">
      <div class="name">Pichai Namwan</div>
      <div>Full Stack Developer</div>
      <div>Newly Graduate From Chaingmai University</div>
    </div>
  </div>
</template>

<style scoped>
.details-box {
  display: flex;
}

.name {
  font-size: 64px;
  font-weight: bold;
}
.details {
  margin-left: 2rem;
  padding: 2rem;
  color: whitesmoke;
}
</style>
