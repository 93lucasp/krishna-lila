<template>
  <div class="col-lg-4">
    <div class="travelBox ">
      <div class="travelBox__img" :style="{ 'background-image': 'url(' + image + ')' }"></div>
      <a :href="path" class="travelBox__link"></a>
      <div class="travelBox__body">
        <h1 class="travelBox__title">{{title}}</h1>
        <p class="travelBox__description">{{abstract}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TravelBox",
  props: {
    title: String,
    path: String,
    image: String,
    abstract: String
  }
};
</script>

<style lang="scss" scoped>
.travelBox {
  border-radius: 5px;

  height: 200px;
//   border: 1px solid #743237;
  
  border-radius: 8px;
  position: relative;
  transition: all 0.2s;
  margin-bottom: 140px;
  
  &__body {
      border-radius: 8px;
    padding: 30px;
    width: 100%;
     height: 160px;
     background-color: #fff;
     position: absolute;
     left: 30px;
  transition: all 0.2s;
     bottom: -80px;
     -webkit-box-shadow: 5px 5px 6px 0px rgba(99,97,99,0.5);
-moz-box-shadow: 5px 5px 6px 0px rgba(99,97,99,0.5);
box-shadow: 5px 5px 6px 0px rgba(99,97,99,0.5);
@media screen and (max-width: 992px) {
      left: 15px;
    }
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
   border-radius: 8px;
    position: relative;
    height: 100%;
       &:before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.3);
        border-radius: 8px;
    }
  }
  &__title {
    font-size: 28px;
    position: relative;
    z-index: 1;
    color: #743237;
  }
  &__desription {
 font-size: 18px;
 font-weight: 300;
 color: #333;
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
    .travelBox__body {
     bottom: -50px;
    }
   
    //       &:before{
    //       background-color: rgba(0,0,0,.3)
    //   }
  }
}
</style>