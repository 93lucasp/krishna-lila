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
      <div class="container pb-5 mb-5">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h1>La gallery</h1>
            <h6>qualche foto dei nostri viaggi</h6>
          </div>
        </div>
        <div class="row py-5 my-5">
          
          <div class="col-lg-12">
            <div class="masonry position-relative">
              <div
                class="grid position-relative"
                v-for="picture in $page.pictures.edges"
                :key="picture.id"
              >
                <a
                  :data-title="picture.node.title"
                  :href="picture.node.image"
                  data-lightbox="travel"
                >
                  <img :src="picture.node.image" class="rounded" />
                </a>
              </div>
            </div>
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
    require('particles.js');
    particlesJS("particles-js", {
      particles: {
        number: { value: 19, density: { enable: true, value_area: 800 } },
        color: { value: "#fcb813" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 23.67442924896818,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 4,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: false, mode: "bubble" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 }
        }
      },
      retina_detect: true
    });
    var count_particles, update;

    count_particles = document.querySelector(".js-count-particles");
    update = function() {
      if (
        window.pJSDom[0].pJS.particles &&
        window.pJSDom[0].pJS.particles.array
      ) {
        // count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  },
  methods: {},
  metaInfo: {
    // title: 'About us',
    link: [
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/css/lightbox.min.css"
      }
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/js/lightbox.min.js"
      }
    ]
    // etc...
  }
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
.masonry {
  columns: 3;
  column-gap: 16px;

  img {
    width: 100%;
  }

  .grid {
    display: inline-block;
    margin-bottom: 16px;
    position: relative;
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
    &__title {
      font-size: 30px;
      @media (max-width: 767px) {
        font-size: 20px;
      }
    }
    &__link {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    &__body {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.2);
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      padding: 20px 30px;
      color: #fff;
      @media (max-width: 767px) {
        padding: 10px 20px;
      }
    }
  }
}
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