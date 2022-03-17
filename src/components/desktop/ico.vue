<script>
export default {};
</script>
<template>
  <div class="contact-box">
    <div class="contact">
      <div class="ico">
        <div>
          <fa :icon="['fas', 'location-pin']" class="fai" />
        </div>
        <div>
          <fa :icon="['fas', 'phone']" class="fai" />
        </div>
        <div>
          <fa :icon="['fas', 'envelope']" class="fai" />
        </div>
      </div>
      <div class="text">
        <div>Chomphu Saraphi Chiang Mai</div>
        <a href="tel:0612705695">
          <div class="tel">061-2705695</div>
        </a>
        <a href="mailto:pichai.n602@gmail.com">
          <div class="email">pichai.n602@gmail.com</div>
        </a>
      </div>
    </div>
    <div class="clickable">
      <a href="https://www.facebook.com/poolmean.devil" target="_blank">
        <fa :icon="['fab', 'facebook']" class="fai facebook" />
      </a>
      <a href="https://www.instagram.com/_mi.nie/?hl=en" target="_blank">
        <fa :icon="['fab', 'instagram']" class="fai instagram" />
      </a>
      <a href="https://github.com/Kiissu602" target="_blank">
        <fa :icon="['fab', 'github']" class="fai github" />
      </a>
      <a
        href="https://www.linkedin.com/in/pichai-namwan-193a96234/"
        target="_blank"
      >
        <fa :icon="['fab', 'linkedin']" class="fai linkedin" />
      </a>
    </div>
  </div>
</template>
<style scoped>
.contact-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.clickable {
  display: flex;
  justify-content: space-between;
  color: whitesmoke;
}
.ico,
.text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: whitesmoke;
}
.email,
.tel {
  color: whitesmoke;
}
.email:hover,
.tel:hover {
  color: #222222;
  background: whitesmoke;
  border-radius: 5px;
  transition: all 0.4s cubic-bezier(0.45, 0, 0.55, 1);
}
a {
  display: flex;
  text-decoration: none;
}
.contact {
  display: flex;
  height: 55%;
}
.text {
  margin-left: 12px;
}
.ico {
  align-items: center;
}

.fai {
  font-size: 30px;
  padding: 4px;
  color: whitesmoke;
}
.facebook:hover {
  color: #3b5998;
  background: whitesmoke;
  border-radius: 5px;
  transition: all 0.4s cubic-bezier(0.45, 0, 0.55, 1);
}
.instagram:hover {
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  border-radius: 5px;
}

.github:hover {
  color: #222222;
  background: whitesmoke;
  border-radius: 5px;
  transition: all 0.4s cubic-bezier(0.45, 0, 0.55, 1);
}
.linkedin:hover {
  color: #0e76a8;
  background: whitesmoke;
  border-radius: 5px;
  transition: all 0.4s cubic-bezier(0.45, 0, 0.55, 1);
}
</style>
