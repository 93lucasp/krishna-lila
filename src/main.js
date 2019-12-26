// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "./assets/css/global.css";
import DefaultLayout from '~/layouts/Default.vue'


import "aos/dist/aos.css";
import vueSmoothScroll from 'vue2-smooth-scroll'


export default function (Vue, {router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(vueSmoothScroll)
  head.script.push(
  {
    src: 'https://kit.fontawesome.com/97471774c6.js',
    body: true,
    crossorigin:"anonymous"
  })
  
  
 
}


       