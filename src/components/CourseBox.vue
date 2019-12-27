<template>
  <div class="col-lg-4">
    <div class="courseBox mb-5 d-flex align-items-center justify-content-between">
      <div class="courseBox__img" :style="{ 'background-image': 'url(' + image + ')' }"></div>
      <a :href="path" class="courseBox__link"></a>
      <div class="courseBox__body">
        <h1 class="courseBox__title">{{title}}</h1>
        <div class="courseBox__line mt-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseBox",
  props: {
    title: String,
    path: String,
    image: String
  }
};
</script>

<style lang="scss" scoped>
.courseBox {
  border-radius: 5px;
-webkit-box-shadow: 5px 5px 6px 0px rgba(99,97,99,0.5);
-moz-box-shadow: 5px 5px 6px 0px rgba(99,97,99,0.5);
box-shadow: 5px 5px 6px 0px rgba(99,97,99,0.5);
  height: 200px;
//   border: 1px solid #743237;
  color: #743237;
  position: relative;
  transition: all 0.2s;
  &__body {
    padding: 30px;
    width: 55%;
  }
  //   &:before{
  //       content: '';
  //       position: absolute;
  //       top: 0;
  //       right: 0;
  //       left: 0;
  //       bottom: 0;
  //       background-color: rgba(0,0,0,.4)
  //   }
  &__img {
    background-size: cover;
    background-position: center;
    width: 45%;
    position: relative;
    height: 100%;
       &:before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.3)
    }
  }
  &__title {
    font-size: 28px;
    position: relative;
    z-index: 1;
  }
  &__line {
    width: 60px;
    height: 1px;
    background-color: #743237;
    transform: translateX(80px);
    transition: all 0.2s;
    position: relative;
    z-index: 1;
  }
  &__link {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
  }
  &:hover {
    //   border: 1px solid #743237;
    .courseBox__line {
      transform: translateX(0);
    }
    transform: scale(1.04);
    //       &:before{
    //       background-color: rgba(0,0,0,.3)
    //   }
  }
}
</style>