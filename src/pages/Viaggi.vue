<template>
  <Layout>
    <div>
      <div class="heroCourse pb-lg-5" id="particles-js">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex align-items-center">
              <div>
                <h1 class="heroCourse__title">Titolo viaggi</h1>
                <p
                  class="heroCourse__description"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ad libero perferendis, non enim dicta eveniet doloribus quis qui aperiam sunt. Quam quod voluptates eveniet soluta doloremque odit aperiam sequi?</p>
                <a href="#" class="btn btn-primary" @click="scrollTo('#courses')">Scopri i corsi</a>
              </div>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
              <g-image src="/uploads/travel.svg" class="heroCourse__illustration" />
            </div>
          </div>
        </div>
      </div>
      <div class="container py-5 my-5">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1>I nostri viaggi</h1>
            <h6>Scopri i nostri viaggi ed immergiti in un autentico spirito indiano</h6>
          </div>
        </div>
        <div class="row py-5 my-5" id="courses">
          <TravelBox
            v-for="travel in $page.travels.edges"
            :title="travel.node.title"
            :abstract="travel.node.abstract"
            :path="travel.node.path"
            :image="travel.node.image"
            :key="travel.id"
          />
        </div>
      </div>
      <div class="container py-5 my-5">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1>La gallery</h1>
            <h6>qualche foto dei nostri viaggi</h6>
          </div>
        </div>
        <div class="row py-5 my-5">
          <div class="col-lg-2">
            <a
              :data-title="picture.node.title"
              :href="picture.node.image"
              data-lightbox="travel"
              v-for="picture in $page.pictures.edges"
              :key="picture.id"
              class="gallery"
            >
              <div
                class="gallery"
                :style="{ 'background-image': 'url(' + picture.node.image + ')' }"
                :key="picture.id"
              ></div>
            </a>
          </div>
          <!-- <TravelBox v-for="travel in $page.travels.edges" :title="travel.node.title" :abstract="travel.node.abstract" :path="travel.node.path" :image="travel.node.image" :key="travel.id"/> -->
        </div>
      </div>
      <Cta />
    </div>
  </Layout>
</template>
<page-query>
query {
  travels: allTravels {
    edges {
      node {
        path
        title
        image
        abstract
      }
    }
  }
  pictures: allPictures {
    edges {
      node {
        title
        image
      }
    }
  }
}
</page-query>
<script>
import myMixin from "~/mixins/mixinCommon.js";
// import particlesJS from "particles.js";
// require("lightbox2");
// if (process.client) {
//   //  import particlesJS from "particles.js";
//    require('particles.js')
// }
// import particlesJS from "particles.js";
import TravelBox from "~/components/TravelBox.vue";
import Cta from "~/components/Cta.vue";

export default {
  components: {
    Cta,
    TravelBox
  },
  mixins: [myMixin],
  mounted() {
    require('lightbox2')
    // window.particlesJS = require('particles.js')
  },
  methods: {}
  // metaInfo: {
  //   title: "About",
  //   meta: [
  //     { name: 'description', content: 'Articles, snippets, events and newsletter for frontend developers' },
  //     { property: 'og:title', content: 'Not Only CSS | About' },
  //     { property: 'og:description', content: 'Articles and tips for frontend developers' },
  //     { property: 'og:image', content: 'https://www.notonlycss.com/uploads/share.png' },
  //     { property: 'og:url', content: 'https://www.notonlycss.com/about' },
  //     {
  //       property: "twitter:card",
  //       content: "summary"
  //     },
  //     {
  //       property: "twitter:title",
  //       content: "Not Only CSS | About"
  //     },
  //     {
  //       property: "twitter:description",
  //       content: "Articles, snippets, events and newsletter for frontend developers"
  //     },
  //     {
  //       property: "twitter:image",
  //       content: "https://www.notonlycss.com/uploads/share.png"
  //     },
  //   ]
  // }
};
</script>
<style lang="scss" scope>
.gallery {
  width: 100%;
  height: 100px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
}
.particles-js-canvas-el {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.heroCourse {
  .btn {
    position: relative;
    z-index: 9;
  }
  &__title {
    font-size: 50px;
    font-weight: bold;
  }
  &__description {
    font-size: 22px;
    font-weight: 300;
  }
  &__illustration {
    max-width: 90%;
  }
}
</style>