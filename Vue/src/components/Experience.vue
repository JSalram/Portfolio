<template>
  <div id="experience" class="p-5">
    <h2 className="mb-5">Experiencia</h2>
    <div v-for="experience in experiences" :key="experience.title">
      <h5>{{ experience.title }}</h5>
      <p>
        {{ experience.company }} - {{ experience.workday }} <br />
        <small>
          {{ experience.dates }} <br />
          {{ experience.location }} ({{ experience.modality }})
        </small>
      </p>
    </div>
  </div>
</template>

<script>
import data from "../assets/data.json";
export default {
  data() {
    return {
      experiences: data.experiences,
    };
  },
};
</script>

<style scoped>
h5,
p {
  padding-left: 5px;
  border-left: 2px solid blue;
}
</style>