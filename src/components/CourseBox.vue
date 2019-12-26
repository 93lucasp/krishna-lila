<template>
  <div class="col-lg-3">
    <div class="courseBox mb-4 d-flex flex-column align-items-center text-center justify-content-center">
      <a :href="path" class="courseBox__link"></a>
      <h1 class="courseBox__title">{{title}}</h1>
      <div class="courseBox__line mt-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseBox",
  props: {
  title: String,
  path: String
}
};
</script>

<style lang="scss" scoped>
.courseBox {
  border-radius: 5px;
  padding: 30px;
  height: 250px;
  border: 1px solid #743237;
  color: #743237;
  position: relative;
  transition: all .2s;
  &__title {
    font-size: 28px;
  }
  &__line{
      width: 60px;
      height: 1px;
      background-color: #743237;
      transform: translateX(100%);
      transition: all .2s;
  }
  &__link{
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
  }
  &:hover{
    //   border: 1px solid #743237;
      .courseBox__line{
           transform: translateX(-100%)
      }
      transform: scale(1.04);
  }
}
</style>