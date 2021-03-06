// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "./assets/css/global.css";
import DefaultLayout from '~/layouts/Default.vue'


import "aos/dist/aos.css";
import "lightbox2/dist/css/lightbox.css";
// import "lightbox2/dist/js/lightbox.js";
// import vueSmoothScroll from 'vue2-smooth-scroll'
// import VueParticles from 'vue-particles'

export default function (Vue, {router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Vue.use(vueSmoothScroll)
  // Vue.use(VueParticles)
  head.script.push(
  {
    src: 'https://kit.fontawesome.com/97471774c6.js',
    body: true,
    crossorigin:"anonymous"
  })
  
  
 
}


       