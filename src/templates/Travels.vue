<template>
  <Layout>
    <div class="coursePage">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <h1 class="text-center mb-5 coursePage__title">{{$page.travel.title}}</h1>
            <div class="d-flex align-items-center justify-content-between coursePage__info">
              <p class="d-flex align-items-center">
                <i class="far fa-calendar-alt mr-2"></i> {{$page.travel.month}}
              </p>
              <p class="d-flex align-items-center">
                <i class="fas fa-globe-americas mr-2"></i> {{$page.travel.place}}
              </p>

              <p class="d-flex align-items-center">
                <i class="far fa-clock mr-2"></i> {{$page.travel.duration}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="coursePage__img mx-auto mb-5" :style="{ 'background-image': 'url(' + $page.travel.image + ')' }"></div>
      <div class="container mb-5">
        <div class="row">
          <div class="col-lg-8 mx-auto py-5">
            <p class="coursePage__description" v-html="$page.travel.content"></p>
          </div>
        </div>
      </div>
      <Cta />
    </div>
  </Layout>
</template>

<page-query>
query ($path: String!) {
    travel: travels (path: $path) {
      title
      place
      duration
      image
      content
      month
      place
    }
}
</page-query>

<script>
import Cta from "~/components/Cta.vue";
export default {
  components: {
    Cta
  },
  metaInfo() {
    return {
      title: this.$page.travel.title
    };
  }
};
</script>
<style lang="scss">
.coursePage {
  &__img {
    height: 600px;
    background-position: center;
    background-size: cover;
  // border-radius: 10px;
  }
  &__description{
    font-weight: 300;
    font-size: 20px; line-height: 30px;
    
  }
  &__info {
    font-size: 18px;
    font-weight: 300;
    i {
      font-size: 24px;
    }
  }
}
</style>

