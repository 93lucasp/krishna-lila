<template>
  <Layout>
    <h1 class="text-3xl md:text-4xl font-bold mb-3">Events <i class="far fa-calendar-alt ml-2 text-2xl"></i></h1>
    <p class="text-lg md:text-xl mb-12 font-light">
     We are an international community and we like meetups where we discuss <b>frontend technologies</b>.
      <br /> <b>Join us</b> and become part of our community
    </p>
    <ul>
      <li
        v-for="course in $page.courses.edges"
        :key="course.id"
        class="event md:flex p-8 rounded mb-16 bg-primary"
      >
        <div>
          <!-- <div
            class="event__preview bg-cover bg-center rounded md:mr-8 mb-8 md:mb-0"
            :style="{ 'background-image': 'url(' + course.node.image + ')' }"
          ></div> -->
        </div>
        <div class="event__body">
          <div>
            <h1 class="text-2xl md:text-3xl font-bold mb-2">{{course.node.title}}</h1>
            <!-- <p class="text-lg md:text-xl mb-4 font-light">{{course.node.teacher}}</p> -->
            <div class="mb-4">
              <!-- <p>
                Date:
                <time>{{course.node.date}}</time>
              </p> -->
            </div>
            <g-link
              :to="course.node.path"
              class="event__link py-2 px-10 rounded block text-center md:inline-block"
            >Find out more and register</g-link>
          </div>
        </div>
      </li>
    </ul>
  </Layout>
</template>
<page-query>
query {
  courses: allCourses {
    edges {
      node {
        path
        title
      }
    }
  }
}
</page-query>
<script>
export default {
  // metaInfo: {
  //   title: "Events",
  //   meta: [
  //     { name: "description", content: "The events of Not Only CSS for frontend developers" },
  //     { property: "og:title", content: "Not Only CSS | Events" },
  //     {
  //       property: "og:description",
  //       content: "The events of Not Only CSS for frontend developers"
  //     },
  //     {
  //       property: "og:image",
  //       content: "https://www.notonlycss.com/uploads/share.png"
  //     },
  //     {
  //       property: "twitter:card",
  //       content: "summary"
  //     },
  //     {
  //       property: "twitter:title",
  //       content: "Not Only CSS | Events"
  //     },
  //     {
  //       property: "twitter:description",
  //       content: "The events of Not Only CSS for frontend developers"
  //     },
  //     {
  //       property: "twitter:image",
  //       content: "https://www.notonlycss.com/uploads/share.png"
  //     },
  //     { property: "og:url", content: "https://www.notonlycss.com/events" },
  //     { name: "robots", content: "index, follow" }
  //   ]
  // }
};
</script>
<style lang="scss">

</style>
