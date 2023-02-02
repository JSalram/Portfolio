<template>
  <div id="projects" class="p-5">
    <h2 class="mb-5">Proyectos</h2>
    <div class="row">
      <div
        v-for="project in projects"
        :key="project.title"
        class="col-lg-4 mb-3"
      >
        <div class="card bg-dark text-white">
          <img src="@/assets/header.jpg" class="card-img" alt="" />
          <div class="card-img-overlay">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">
              {{ project.description }}
            </p>
            <p class="card-text">{{ project.updated }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../assets/data.json";
export default {
  data: () => {
    return {
      projects: data.projects,
    };
  },
};
</script>

<style scoped>
</style>