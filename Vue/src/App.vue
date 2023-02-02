<template>
  <Navbar />
  <Header />
  <About />
  <Experience />
  <Training />
  <Projects />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Training from "./components/Training.vue";
import Projects from "./components/Projects.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Header,
    About,
    Experience,
    Training,
    Projects,
  },
};
</script>

<style>
body {
  background-color: #fbfcff;
}
html {
  scroll-padding-top: 3rem;
}

#experience,
#training {
  background-color: #d0ccd0;
}
</style>
