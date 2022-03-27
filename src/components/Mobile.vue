<script>
import Details from "./mobile/details.vue";
import Contact from "./mobile/contact.vue";
import Skill from "./mobile/skill.vue";
export default {
  components: { Details, Contact, Skill },
};
</script>

<template>
  <div class="card">
    <div class="card-title"><Details /></div>
    <div class="card-body"><Contact /><Skill /></div>
  </div>
</template>

<style scoped>
.card {
  width: 98%;
  height: 98%;
  background-color: whitesmoke;
  border-radius: 5px;
  padding: 1rem;
}
.card-title {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border-radius: 5px 5px 0px 0px;
}
.card-body {
  margin-top: 1.5rem;
  padding: 1rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
