<template>
  <div>
    <Navbar />
    <!-- <div class="container mb-40">
      <slot />
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
export default {
  components: {
    Navbar
  },
  methods: {
    hamburger: function(el) {
      document
        .querySelector(".hamburger")
        .classList.toggle("hamburger--active");
      document.querySelector("nav").classList.toggle("nav--active");
    }
  }
};
</script>
<style lang="scss">
.hamburger-container {
  width: 30px;
  height: 30px;
}
.hamburger {
  width: 26px;
  height: 1px;
  background-color: #333;
  position: absolute;
  top: 50px;
  right: 30px;
  z-index: 9;

  &:before {
    content: "";
    width: 30px;
    height: 1px;
    background-color: #333;
    top: -8px;
    position: absolute;
    transition: all 0.2s;
  }
  &:after {
    content: "";
    width: 30px;
    height: 1px;
    background-color: #333;
    top: 8px;
    position: absolute;
    transition: all 0.2s;
  }
  &--active {
    background-color: transparent;
    &:before {
      background-color: #333;
      top: 0;
      transform: rotate(45deg);
    }
    &:after {
      background-color: #333;
      top: 0;
      transform: rotate(-45deg);
    }
  }
}
.header {
  color: #333;
  position: relative;
  &__logo {
    width: 160px;
  }
  .nav {
    @media screen and (max-width: 992px) {
      // @include size(94%, 20em);
      opacity: 0;
      background-color: #fff;
      height: 100%;
      width: 100%;
      position: fixed;
      top: 110px;
      right: 0;
      bottom: 0;
      left: -100%;
      transition: all 0.2s;
      &--active {
        left: 0%;
        opacity: 1;
      }
    }
  }
  .dropdown {
    position: absolute;
    top: 120%;
    background: #ccc;
    padding: 20px 0;
    display: none;
    z-index: 1;
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
