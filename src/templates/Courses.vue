<template>
  <Layout>
    <div class="coursePage">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <h1 class="text-center mb-5 coursePage__title">Title coursePage</h1>
            <div class="d-flex align-items-center justify-content-between coursePage__info">
              <p class="d-flex align-items-center">
                <i class="fas fa-male mr-2"></i> Maestro Mahi
              </p>
              <p class="d-flex align-items-center">
                <i class="far fa-clock mr-2"></i> 60 minuti
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="coursePage__img mx-auto mb-5" style="background-image: url('https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')"></div>
      <div class="container mb-5">
        <div class="row">
          <div class="col-lg-8 mx-auto ">
            <p class="coursePage__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  
              <var>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima exercitationem dolore maxime commodi laboriosam rerum mollitia laudantium ipsam assumenda. Excepturi rerum ipsa, ducimus est dolore recusandae enim neque nemo commodi?  </var>
            </p>
          </div>
        </div>
      </div>
      <!-- <h1 class="text-3xl md:text-4xl font-bold mb-6">{{$page.event.title}}</h1> -->
      <!-- <div class="course__image" :style="{ 'background-image': 'url(' + $page.event.image + ')' }"></div>
      <!-- <i><time>{{$page.event.date}}</time></i> -->
      <!-- <div v-html="$page.event.content"></div> -->
      <Cta />
    </div>
  </Layout>
</template>

<page-query>
query ($path: String!) {
    course: courses (path: $path) {
      title
      teacher
      duration
      image
      content
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
      title: this.$page.course.title
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

