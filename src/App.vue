<script>
import Desktop from "./components/Desktop.vue";
export default {
  components: { Desktop },
};
</script>

<template>
  <main>
    <Desktop />
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1920px;
  margin: 0 auto;
  padding: 2rem;
  height: 1080px;
}
</style>
