<script>
export default {};
</script>

<template>
  <div class="skill-box">
    <div class="sk">Skill</div>
    <div class="skill-list">
      <ul>
        <li class="skill-details">C#</li>
        <li class="skill-details">C/C++</li>
        <li class="skill-details">Python</li>
        <li class="skill-details">Java Script/Type Script</li>
        <li class="skill-details">SQL</li>
        <li class="skill-details">HTML/CSS</li>
      </ul>
      <ul>
        <li class="skill-details">Vue.js</li>
        <li class="skill-details">Angular</li>
        <li class="skill-details">.Net Core</li>
        <li class="skill-details">Entity Framework Core</li>
        <li class="skill-details">Nest.js</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.skill-box {
  width: 95%;
}
.sk {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.skill-list {
  display: flex;
  justify-content: space-around;
}
</style>
