<script>
export default {};
</script>
<template>
  <div>
    <div class="contact">
      <div class="text">
        <fa :icon="['fas', 'location-pin']" size="2x" />
        Chomphu Saraphi Chiang Mai
      </div>
      <div class="text">
        <fa :icon="['fas', 'phone']" size="2x" />
        +6661-2705695
      </div>
      <div class="text">
        <fa :icon="['fas', 'envelope']" size="2x" />
        pichai.n602@gmail.com
      </div>
    </div>
    <div class="clickable">
      <fa :icon="['fab', 'facebook']" size="2x" />
      <fa :icon="['fab', 'instagram']" size="2x" />
      <fa :icon="['fab', 'github']" size="2x" />
      <fa :icon="['fab', 'linkedin']" size="2x" />
    </div>
  </div>
</template>
<style scoped>
.clickable {
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
}

.text {
  margin-top: 12px;
}
</style>
