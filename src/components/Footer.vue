<template>
  <footer class="footer py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 text-center text-lg-left mb-3 mb-lg-0">
          <h6 class="footer__title mb-2">Ass. Culturale Krishna Lila</h6>
          <p>Via San Quintino 31, 10121, Torino</p>
          <p>0116989157</p>
          <p>krishnalila31@gmail.com</p>
        </div>
        <div class="col-lg-4 d-flex justify-content-center text-center text-lg-left">
            <div class="d-inline-block">
            <h6 class="footer__title mb-2">Scopri di più</h6>
            <ul class="list-unstyled">
                <li>
                     <a href="http://">Contatti</a>
                    
                    
                </li>
                <li>
                    <a href="http://">Blog</a>
                    
                </li>
                <li>
                   <a href="http://">Chi siamo</a>
                </li>
            </ul>
            </div>
        </div>
        <div class="col-lg-4 d-flex justify-content-center justify-content-lg-end">
            <div class="d-inline-block">
          <h6 class="footer__title mb-2">Seguici su</h6>
          <ul class="list-unstyled d-flex">
            <li class="mr-2">
              <a
                href="https://www.facebook.com/pg/KrishnaLilaMahi/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="mx-2">
              <a
                href="https://www.instagram.com/mahikrishnalila/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="mx-2">
              <a
                href="https://twitter.com/mahikrishnalila"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
           </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #743237;
  color: #fff;
  li {
  }
  i {
    font-size: 22px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  p {
    margin: 0;
  }
  &__title {
    color: #fcb813;
    font-weight: bold;
  }
}
</style>