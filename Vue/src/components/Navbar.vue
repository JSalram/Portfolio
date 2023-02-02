<template>
  <div id="inicio"></div>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
    <div class="container-fluid">
      <a @click="select" class="navbar-brand" href="#inicio">Salram</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <a
            @click="select"
            class="nav-link active"
            aria-current="page"
            href="#about"
            >Sobre mí</a
          >
          <a @click="select" class="nav-link" href="#experience"
            >Experiencia</a
          >
          <a @click="select" class="nav-link" href="#training">Formación</a>
          <a @click="select" class="nav-link" href="#projects">Proyectos</a>
          <a @click="select" class="nav-link" href="#contacto">Contacto</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    select(event) {
      this.unselect();
      event.target.classList.add("active");
    },
    unselect() {
      let activeNavLink = document.querySelector("a.active");
      if (activeNavLink) {
        activeNavLink.classList.remove("active");
      }
    },
  },
  created() {
    window.addEventListener("wheel", this.unselect);
  },
};
</script>

<style>
.navbar {
  background-color: #274156;
}
</style>