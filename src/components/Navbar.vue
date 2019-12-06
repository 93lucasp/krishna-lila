<template>
  <header class="header py-3">
    <div class="container d-lg-flex align-items-center justify-content-between">
      <g-link to="/" class="nav__link">
        <g-image src="~/images/krishna-lila.png" class="header__logo" />
      </g-link>
      <nav class="nav">
        <ul class="list-unstyled d-lg-flex align-items-center m-0">
          <li
            v-for="link in $static.links.edges"
            :key="link.id"
            class="position-relative py-2 py-lg-0"
          >
            <g-link :to="link.node.page" class="nav__link mx-3 py-3">{{link.node.title}}</g-link>
            <ul class="dropdown list-unstyled" v-if="link.node.submenu == true ">
              <li v-if="link.node.title1 !== ''">
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  :to="link.node.page1"
                >{{link.node.title1}}</g-link>
              </li>
              <li v-if="link.node.title2 !== ''">
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  :to="link.node.page2"
                >{{link.node.title2}}</g-link>
              </li>
              <li v-if="link.node.title3 !== ''">
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  :to="link.node.page3"
                >{{link.node.title3}}</g-link>
              </li>
              <li v-if="link.node.title4 !== ''">
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  :to="link.node.page4"
                >{{link.node.title4}}</g-link>
              </li>
              <li v-if="link.node.title5 !== ''">
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  :to="link.node.page5"
                >{{link.node.title5}}</g-link>
              </li>
              <li v-if="link.node.title6 !== ''">
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  :to="link.node.page6"
                >{{link.node.title6}}</g-link>
              </li>
              <li v-if="link.node.title7 !== ''">
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  :to="link.node.page7"
                >{{link.node.title7}}</g-link>
              </li>
              <li v-if="link.node.title8 !== ''">
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  :to="link.node.page8"
                >{{link.node.title8}}</g-link>
              </li>
              
            </ul>
          </li>

          <!-- <li class="position-relative py-2 py-lg-0">
            <g-link class="nav__link mx-3 py-3" to="/snippets">Chi siamo</g-link>
          </li>
          <li class="position-relative py-2 py-lg-0">
            <a class="nav__link mx-3 py-3" href="javascript:void(0)">
              Trattamenti ayurvedici
              <i class="fas fa-chevron-down ml-2"></i>
            </a>
            <ul class="dropdown list-unstyled w-100">
              <li>
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  to="/events/"
                >Trattamenti ayurvedici</g-link>
              </li>
              <li>
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  to="/events/"
                >Trattamenti ayurvedici</g-link>
              </li>
              <li>
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  to="/events/"
                >Trattamenti ayurvedici</g-link>
              </li>
              <li>
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  to="/events/"
                >Trattamenti ayurvedici</g-link>
              </li>
              <li>
                <g-link
                  class="nav__link mx-3 py-1 d-inline-block"
                  to="/events/"
                >Trattamenti ayurvedici</g-link>
              </li>
            </ul>
          </li>
          <li class="position-relative py-2 py-lg-0">
            <g-link class="nav__link mx-3 py-3" to="/newsletter/">Consulenze energetiche</g-link>
          </li>
          <li class="position-relative py-2 py-lg-0">
            <g-link class="nav__link mx-3 py-3" to="/about/">Corsi e Seminari</g-link>
          </li>
          <li class="position-relative py-2 py-lg-0">
            <g-link class="nav__link mx-3 py-3" to="/about/">Viaggi</g-link>
          </li>-->
        </ul>
      </nav>
    </div>
    <div class="hamburger-container d-flex align-items-center d-lg-none" @click="hamburger()">
      <div class="hamburger"></div>
    </div>
    <!-- - {{$static.links.edges}} - -->
  </header>
</template>
<static-query>
query {
  links: allNav {
    edges {
      node {
        title
        page
        submenu
        title1
        page1
        title1
        page1
        title2
        page2
        title3
        page3
        title4
        page4
        title5
        page5
        title6
        page6
        title7
        page7
        title8
        page8

        
      }
    }
  }
}
</static-query>
<script>
export default {
  name: "Navbar",
  methods: {
    hamburger: function(el) {
      document
        .querySelector(".hamburger")
        .classList.toggle("hamburger--active");
      document.querySelector("nav").classList.toggle("nav--active");
      document.querySelector("body").classList.toggle("overflow-hidden");
    }
  }
};
</script>

<style>
</style>