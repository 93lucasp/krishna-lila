<template>
  <div>
    <Navbar />
    <slot />
    <Footer />
    <!-- <div class="container mb-40">
      
    </div>-->

    <!-- <hr /> -->
    <!-- <footer class="footer py-6 md:flex items-center justify-between text-center md:text-left">
      <p>
        Not Only CSS is proudly
        <br />running on
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >Netlify</a>.
      </p>
      <p class="py-3 md:py-0">
        <a href="mailto:info@notonlycss.com">
          Write for us
          <i class="fas fa-pencil-alt ml-2"></i>
        </a>
      </p>
      <ul class="flex justify-center md:justify-end">
        <li>
          <a
            href="https://www.facebook.com/notOnlyCSS/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f text-2xl"></i>
          </a>
        </li>
        <li class="mx-5">
          <a
            href="https://twitter.com/NotOnlyCSS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter text-2xl"></i>
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/notonlycss"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
          >
            <i class="fab fa-medium-m text-2xl"></i>
          </a>
        </li>
      </ul>
    </footer>-->
  </div>
</template>


<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import AOS from "aos";
export default {
  components: {
    Navbar,
    Footer
  },
  mounted() {
    AOS.init();
  },
  methods: {
    scrollTo: function(elementToGo) {
            $('html, body').animate({
                scrollTop: $(elementToGo).offset().top
            }, 500);
        },
  }
};
</script>
<style lang="scss">
.description {
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
}
.title {
  font-weight: 500;
  font-size: 3rem;
}
.btn-primary{
  background-color: #fcb813!important;
  border-color: #fcb813!important;
  transition: all .2s;
  transform: scale(1);
  &:hover ,&:active,&:focus {
     background-color: #fcb813!important;
  border-color: #fcb813!important;
  transform: scale(1.05);
  }
}
.btn-secondary{
  background-color: #fff;
  border-color: #fff;
  transition: all .2s;
  transform: scale(1);
  color: #743237;
  &:hover ,&:active,&:focus {
     background-color: #fff;
  border-color: #fff;
  transform: scale(1.05);
  color: #743237;
  }
}
.hamburger-container {
  width: 30px;
  height: 20px;
  position: absolute;
  top: 40px;
  right: 30px;
  z-index: 9;
}
.hamburger {
  width: 26px;
  height: 1px;
  background-color: #333;

  z-index: 9;

  &:before {
    content: "";
    width: 30px;
    height: 1px;
    background-color: #333;
    top: 0;
    position: absolute;
    transition: all 0.2s;
  }
  &:after {
    content: "";
    width: 30px;
    height: 1px;
    background-color: #333;
    top: 100%;
    position: absolute;
    transition: all 0.2s;
  }
  &--active {
    background-color: transparent;
    &:before {
      background-color: #333;
      top: 50%;
      transform: rotate(45deg);
    }
    &:after {
      background-color: #333;
      top: 50%;
      transform: rotate(-45deg);
    }
  }
}
.header {
  color: #333;
  position: relative;
  &__logo {
    width: 160px;
    z-index: 9;
    position: relative;
  }
  .nav {
    z-index: 9;
    &__link {
      position: relative;
      &:after {
        content: "";
        height: 1px;
        background-color: #743237;
        width: 0;
        position: absolute;
        bottom: 3px;
        left: 50%;
        transition: all 0.2s;
      }
      &:hover {
        color: #743237;
        &:after {
          left: 0%;
          width: 100%;
        }
      }
    }
    @media screen and (max-width: 992px) {
      padding-top: 30px;
      padding-bottom: 30px;
      // @include size(94%, 20em);
      opacity: 0;
      background-color: #fff;
      height: 100%;
      width: 100%;
      position: fixed;
      top: 90px;
      right: 0;
      bottom: 0;
      left: -100%;
      transition: all 0.2s;
      z-index: 9;
    }
    &--active {
      @media screen and (max-width: 992px) {
        left: 0%;
        opacity: 1;
      }
    }
  }
  .dropdown {
    position: absolute;
    top: 120%;
    background: #fff;
    padding: 20px 0;
    display: none;
    z-index: 1;
    width: 250px;
    -webkit-box-shadow: 0px 2px 9px -2px rgba(82, 83, 94, 0.63);
    -moz-box-shadow: 0px 2px 9px -2px rgba(82, 83, 94, 0.63);
    box-shadow: 0px 2px 9px -2px rgba(82, 83, 94, 0.63);
  }
  @media screen and (max-width: 992px) {
    // @include size(94%, 20em);
  }
  li {
    a {
      color: #333;
      text-decoration: none;
      @media screen and (max-width: 992px) {
        font-size: 22px;
      }
    }
    &:hover {
      .dropdown {
        display: block;
      }
    }
  }
}
</style>
