<template>
  <Layout class="position-relative">
    <HeroHome />
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-lg-3 boxCourse boxCourse--1 d-flex align-items-center"
          style="background-image: url('https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80')"
        >
          <a href="/" class="boxCourse__link"></a>
          <div class="boxCourse__body">
            <h1 class="boxCourse__title mb-3">Consulenze energetiche</h1>
            <div class="boxCourse__line mb-3"></div>
            <p
              class="boxCourse__description mb-4"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet consectetur adipisicing.</p>
            <!-- <a href="http://" class="btn boxCourse__btn">Scopri di più</a> -->
          </div>
        </div>
        <div
          class="col-lg-3 boxCourse boxCourse--2 d-flex align-items-center"
          style="background-image: url('https://images.unsplash.com/photo-1551718748-bb05729e1a66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80')"
        >
          <a href="/" class="boxCourse__link"></a>
          <div class="boxCourse__body">
            <h1 class="boxCourse__title mb-3">Corsi</h1>
            <div class="boxCourse__line mb-3"></div>
            <p
              class="boxCourse__description mb-4"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet consectetur adipisicing.</p>
            <!-- <a href="http://" class="btn boxCourse__btn">Scopri di più</a> -->
          </div>
        </div>
        <div
          class="col-lg-3 boxCourse boxCourse--3 d-flex align-items-center"
          style="background-image: url('https://images.unsplash.com/photo-1523832083691-c772f31be296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80')"
        >
          <a href="/" class="boxCourse__link"></a>
          <div class="boxCourse__body">
            <h1 class="boxCourse__title mb-3">Trattamenti</h1>
            <div class="boxCourse__line mb-3"></div>
            <p
              class="boxCourse__description mb-4"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet consectetur adipisicing.</p>
            <!-- <a href="http://" class="btn boxCourse__btn">Scopri di più</a> -->
          </div>
        </div>
        <div
          class="col-lg-3 boxCourse boxCourse--4 d-flex align-items-center"
          style="background-image: url('https://images.unsplash.com/photo-1531642765602-5cae8bbbf285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=618&q=80')"
        >
          <a href="/" class="boxCourse__link"></a>
          <div class="boxCourse__body">
            <h1 class="boxCourse__title mb-3">Viaggi</h1>
            <div class="boxCourse__line mb-3"></div>
            <p
              class="boxCourse__description mb-4"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet consectetur adipisicing.</p>
            <!-- <a href="http://" class="btn boxCourse__btn">Scopri di più</a> -->
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  articles: allArticles(order: DESC) {
    edges {
      node {
        title
        abstract
        image
        link
        date
        author
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
.boxCourse {
  background-size: cover;
  background-position: center;

  background-color: rgba(255, 255, 255, 0.6);
  height: 300px;
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
     @media screen and (max-width: 992px) { transform: translateX(200px);}
  }
  &__title {
    position: relative;
    z-index: 2;
    color: #333;
    font-size: 24px;
    font-weight: bold;
    transition: all 0.2s;
    transform: translateX(80px);
    @media screen and (max-width: 992px) { transform: translateX(30px);}
  }
  &__description {
    position: relative;
    font-size: 18px;
    z-index: 2;
    color: #333;
    transition: all 0.2s;
    transform: translateX(-20px);
    opacity: 0;
    @media screen and (max-width: 992px) { opacity:1;transform: translateX(30px);}
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
    background-color: rgba(255, 255, 255, 0.9);
  }
}
</style>
