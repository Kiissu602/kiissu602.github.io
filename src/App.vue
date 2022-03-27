<script>
import Desktop from "./components/Desktop.vue";
import Mobile from "./components/Mobile.vue";
export default {
  components: { Desktop, Mobile },

  created() {
    window.addEventListener("resize", this.resizeHandler);
  },

  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  data: () => ({
    height: window.innerHeight,
    width: window.innerWidth,
    mobile: window.innerWidth <= 992,
  }),

  watch: {
    width() {
      if (this.width <= 992) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
  },
  methods: {
    resizeHandler(e) {
      this.height = window.innerHeight;
      this.width = window.innerWidth;
    },
  },
};
</script>

<template>
  <main>
    <Mobile v-if="mobile === true" />
    <Desktop v-else />
  </main>
</template>

<style>
@import "./assets/base.css";
</style>
