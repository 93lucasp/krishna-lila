<template>
  <Layout class="position-relative" >
    <div v-for="text in $page.texts.edges" :key="text.id">

    
    <HeroHome :title="text.node.headerTitle" :image="text.node.headerImage" />
   
    <div class="container-fluid">

      <div class="row">
        <div
          class="col-lg-3 boxCourse boxCourse--1 d-flex align-items-center"
          style="background-image: url('/uploads/energy.svg')"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
        >
          <a href="/consulenze-energetiche" class="boxCourse__link"></a>
          <div class="boxCourse__body">
            <h1 class="boxCourse__title mb-3">{{text.node.consultingTitle}}</h1>
            <div class="boxCourse__line mb-3"></div>
            <p
              class="boxCourse__description mb-4"
            >{{text.node.consultingDescription}}</p>
            <!-- <a href="http://" class="btn boxCourse__btn">Scopri di più</a> -->
          </div>
        </div>
        <div
          class="col-lg-3 boxCourse boxCourse--2 d-flex align-items-center"
          style="background-image: url('/uploads/yoga.svg')"
           data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
        >
          <a href="/corsi-e-seminari" class="boxCourse__link"></a>
          <div class="boxCourse__body">
            <h1 class="boxCourse__title mb-3">{{text.node.courseTitle}}</h1>
            <div class="boxCourse__line mb-3"></div>
            <p
              class="boxCourse__description mb-4"
            >{{text.node.courseDescription}}</p>
            <!-- <a href="http://" class="btn boxCourse__btn">Scopri di più</a> -->
          </div>
        </div>
        <div
          class="col-lg-3 boxCourse boxCourse--3 d-flex align-items-center"
          style="background-image: url('/uploads/trattamenti.svg')"
           data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
        >
          <a href="/" class="boxCourse__link"></a>
          <div class="boxCourse__body">
            <h1 class="boxCourse__title mb-3">{{text.node.treatmentsTitle}}</h1>
            <div class="boxCourse__line mb-3"></div>
            <p
              class="boxCourse__description mb-4"
            >{{text.node.treatmentsDescription}}</p>
            <!-- <a href="http://" class="btn boxCourse__btn">Scopri di più</a> -->
          </div>
        </div>
        <div
          class="col-lg-3 boxCourse boxCourse--4 d-flex align-items-center"
          style="background-image: url('/uploads/travel.svg')"
           data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700"
        >
          <a href="/viaggi" class="boxCourse__link"></a>
          <div class="boxCourse__body">
            <h1 class="boxCourse__title mb-3">{{text.node.travelTitle}}</h1>
            <div class="boxCourse__line mb-3"></div>
            <p
              class="boxCourse__description mb-4"
            >{{text.node.travelDescription}}</p>
            <!-- <a href="http://" class="btn boxCourse__btn">Scopri di più</a> -->
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <div class="row py-5">
        <div class="col-lg-6 py-3 d-flex align-items-center pr-lg-5">
          <div>
             
            <h1 class="title">{{text.node.titleDescription1}}</h1>
            
            <p class="description" v-html="text.node.content">
            </p>
            <!-- <div v-html="text.node.description1"></div> -->
          </div>
        </div>
        <div class="col-lg-6 py-3 d-flex align-items-center">
          <div
            class="about-image"
            :style="{ 'background-image': 'url(' + text.node.imgDescription1 + ')' }"
          ></div>
        </div>
      </div>
      <!-- https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80 -->
      <!-- <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JeTiK6JLyNE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
    </div>
    <div class="container mb-5 pb-lg-5">
      <div class="row">
        <div class="col-lg-6 py-3 order-1 order-lg-0 d-flex align-items-center">
          <iframe
            
            src="https://www.youtube-nocookie.com/embed/JeTiK6JLyNE?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-lg-6 order-0 order-lg-1 py-3 d-flex align-items-center pl-lg-5">
          <div>
            <h1 class="title">{{text.node.titleDescription2}}</h1>
            <p class="description" >{{text.node.description2}}
            </p>
          </div>
        </div>
      </div>
      <!-- https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80 -->
      <!-- <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JeTiK6JLyNE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
    </div>
    <div class="container text-center py-5 my-5">
       <g-image src="~/images/logo-csen.png" class="" />
    </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  texts: allHome {
    edges {
      node {
        headerImage
        headerTitle
        consultingTitle
        consultingDescription
        courseTitle
        courseDescription
        treatmentsTitle
        treatmentsDescription
        travelTitle
        travelDescription
        titleDescription1
        imgDescription1
        titleDescription2
        content
        description2
      }
    }
  }
}
</page-query>
<script>
import HeroHome from "~/components/HeroHome.vue";
export default {
  components: {
    HeroHome
  },
  metaInfo: {
    // meta: [
    //   {
    //     name: "description",
    //     content: "Articles, snippets, events and newsletter for frontend developers"
    //   },
    //   { property: "og:title", content: "Not Only CSS" },
    //   {
    //     property: "og:description",
    //     content: "Articles, snippets, events and newsletter for frontend developers"
    //   },
    //   {
    //     property: "og:image",
    //     content: "https://www.notonlycss.com/uploads/share.png"
    //   },
    //   {
    //     property: "twitter:card",
    //     content: "summary"
    //   },
    //   {
    //     property: "twitter:title",
    //     content: "Not Only CSS"
    //   },
    //   {
    //     property: "twitter:description",
    //     content: "Articles, snippets, events and newsletter for frontend developers"
    //   },
    //   {
    //     property: "twitter:image",
    //     content: "https://www.notonlycss.com/uploads/share.png"
    //   },
    //   { property: "og:url", content: "https://www.notonlycss.com" },
    // ]
  },
  methods: {
    formatDate(date) {
      var newDate = new Date(date);
      var options = { year: "numeric", month: "short", day: "numeric" };
      return newDate.toLocaleDateString("en", options);
    }
  }
};
</script>

<style lang="scss">

iframe {
  border-radius: 10px;
  width:100%;
            height:305px;
  @media screen and (max-width: 992px) {
     height: 200px;
    }
}
.about-image {
  background-size: cover;
  width: 100%;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  @media screen and (max-width: 992px) {
     height: 300px;
    }
}
.boxCourse {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.6);
  height: 350px;
  padding: 30px 0;

  &__body {
    width: 80%;
  }
  // &__btn {
  //   background-color: #743237;
  //   color: #fff;
  //   border-radius: 0;
  //   z-index: 2;
  //   position: relative;
  //   transition: all 0.2s;
  //   transform: translateX(-20px);
  //   opacity: 0;
  //   &:hover {
  //     background-color: #743237;
  //     color: #fff;
  //   }
  // }
  &__link {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 3;
  }
  &__line {
    z-index: 2;
    position: relative;
    background-color: #333;
    width: 50px;
    height: 1px;
    transition: all 0.2s;
    transform: translateX(20px);
    @media screen and (max-width: 992px) {
      transform: translateX(200px);
    }
  }
  &__title {
    position: relative;
    z-index: 2;
    color: #333;
    font-size: 24px;
    font-weight: bold;
    transition: all 0.2s;
    transform: translateX(80px);
    @media screen and (max-width: 992px) {
      transform: translateX(30px);
    }
  }
  &__description {
    position: relative;
    font-size: 18px;
    z-index: 2;
    color: #333;
    transition: all 0.2s;
    transform: translateX(-20px);
    opacity: 0;
    @media screen and (max-width: 992px) {
      opacity: 1;
      transform: translateX(30px);
    }
  }
  &:hover {
    .boxCourse__title {
      transform: translateX(30px);
    }
    .boxCourse__description {
      opacity: 1;
      transform: translateX(30px);
    }
    .boxCourse__line {
      transform: translateX(200px);
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
