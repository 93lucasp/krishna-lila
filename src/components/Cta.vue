<template>
    <div class="cta">
        <div class="container my-5">
          <div class="row">
            <div class="col-lg-7 mx-auto text-center">
              <h1 class="cta__title mb-3">Maggiori informazioni</h1>
              <p
                class="cta__description mb-4"
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque magnam enim vel dignissimos deleniti placeat. Quis cum tempora illum officiis facilis consequatur nobis vitae ea soluta dolore. Possimus, accusamus?</p>
              <a href="http://" class="btn btn-primary mx-1 mx-lg-3">
                <i class="fas fa-phone-alt mr-2"></i> Chiamaci
              </a>
              <a href="http://" class="btn btn-primary mx-1 mx-lg-3">
                <i class="fas fa-envelope mr-2"></i> Scrivici
              </a>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "Cta"
};
</script>

<style lang="scss" scoped>
.cta {
  border-radius: 5px;
  padding: 30px;
  background-color: #f5f5f5;
  color: #333;

  &__title {
    //   color: #743237;
  }
  &__description {
    //   color:#333;
    font-size: 20px;
    font-weight: 300;
  }
}
</style>