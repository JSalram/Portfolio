<template>
  <div id="training" class="p-5">
    <h2 class="mb-5">Formación</h2>
    <div v-for="training in trainings" :key="training.title">
      <div>
        <h5>{{ training.title }}</h5>
        <p>
          {{ training.college }}
          <br />
          <small>
            {{ training.dates }}
            <br />
            {{ training.location }}
          </small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../assets/data.json";
export default {
  data() {
    return {
      trainings: data.trainings,
    };
  },
};
</script>

<style scoped>
#training {
  background-color: #d0ccd0;
}
</style>