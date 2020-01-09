<template>
  <div
    class="heroHome position-relative d-flex align-items-center"
   :style="{ 'background-image': 'url(' + image + ')' }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="heroHome__title" data-aos="fade-up" data-aos-duration="2000">
           {{title}}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroHome",
  props: {
  title: String,
  image: String,
}
};
</script>

<style lang="scss" scoped>
.heroHome {
  height: 600px;
  background-size: cover;
  background-position-y: -130px;
  background-position-x: center;
  background-repeat: no-repeat;
  position: relative;
  color: #fff;
   @media screen and (max-width: 992px) {
     height: 500px;
     background-position-y: center;
     background-position-x: center;
   }
  &__title {
    position: relative;
    z-index: 1;
    font-size: 50px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>