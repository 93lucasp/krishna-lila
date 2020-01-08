<template>
  <Layout>
    <div
      class="heroAbout position-relative d-flex align-items-center"
      style="background-image: url('https://images.unsplash.com/photo-1528293319334-2b98c83a27fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80')"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <h1 class="heroAbout__title" data-aos="fade-up" data-aos-duration="2000">
              Un angolo d'India
              <br />a Torino
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <p class="description">
            Entrando da Krishna Lila si ha una sensazione di tranquillità e pace, che nel mondo frenetico di oggi si rincorrono quasi fossero un’utopia.
            Colpisce il profumo d’ “India” che si diffonde in ogni stanza, la calda atmosfera intensificata dalle luci soffuse.
            In tutto l’ambiente pervadono mantra e musiche indiane.
            La decorazione del centro è studiata con cura per trasmettere la cultura e la serietà di questo luogo.
            Le tensioni si allentano e si percepisce un luogo nuovo, distante dai problemi e dai pensieri quotidiani.
            Le affidabili parole del maestro spirituale sanno guidarti verso un percorso positivo, i sorrisi e la gentilezza dello staff infondono pace e benessere, le mani sapienti delle operatrici sanno donare leggerezza e la ricercatezza degli unguenti indiani completa il tutto.
          </p>
        </div>
      </div>
    </div>
    <div class="container mb-5 pb-lg-5">
      <div class="row">
        <div class="col-lg-8 mx-auto py-3 d-flex align-items-center">
          <div>
            <h1 class="title">Il nostro centro</h1>
            <p
              class="description"
            >L'intento dell’associazione è la piena soddisfazione e la risoluzione di tutti i problemi della persona interessata al proprio equilibrio psicofisico, trasmettendo la consapevolezza che si può stare veramente bene senza l’aiuto della medicina tradizionale, ma con metodi del tutto naturali e con l’aiuto di uno staff altamente specializzato e di un maestro indiano, dotato di un bagaglio decennale di esperienze nell’ambito delle terapie e dei trattamenti ayurvedici.</p>
          </div>
        </div>
        <div class="col-lg-8 mx-auto py-3 d-flex align-items-center">
          <iframe
            class="iframe"
            src="https://www.youtube-nocookie.com/embed/JeTiK6JLyNE?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    
    </div>
    <Cta />
  </Layout>
</template>

<script>
import Cta from "~/components/Cta.vue";

export default {
  components: {
    Cta
  }
  // metaInfo: {
  //   title: "About",
  //   meta: [
  //     { name: 'description', content: 'Articles, snippets, events and newsletter for frontend developers' },
  //     { property: 'og:title', content: 'Not Only CSS | About' },
  //     { property: 'og:description', content: 'Articles and tips for frontend developers' },
  //     { property: 'og:image', content: 'https://www.notonlycss.com/uploads/share.png' },
  //     { property: 'og:url', content: 'https://www.notonlycss.com/about' },
  //     {
  //       property: "twitter:card",
  //       content: "summary"
  //     },
  //     {
  //       property: "twitter:title",
  //       content: "Not Only CSS | About"
  //     },
  //     {
  //       property: "twitter:description",
  //       content: "Articles, snippets, events and newsletter for frontend developers"
  //     },
  //     {
  //       property: "twitter:image",
  //       content: "https://www.notonlycss.com/uploads/share.png"
  //     },
  //   ]
  // }
};
</script>
<style lang="scss" scoped>
.iframe {
  height: 400px;
  width: 100%;
  border-radius: 8px;
}
.heroAbout {
  height: 500px;
  background-position: center;
  background-size: cover;
  color: #fff;
  position: relative;
  &__title {
    position: relative;
    z-index: 2;
    color: #fff;
    font-size: 53px;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
}
</style>