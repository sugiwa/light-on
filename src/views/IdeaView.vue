<script setup lang="ts">
import { computed, ref } from "vue";

const idea = ref<string>("");
const ideaList = ref<Array<string>>([]);

const isValid = computed<boolean>(() => {
  return ideaList.value.length > 2;
});

const addIdea = () => {
  console.log(idea.value);
  if (idea.value !== "") {
    ideaList.value.push(idea.value);
    idea.value = "";
  }
};
const searchIdea = () => {
  console.log("searchIdea: ", ideaList);
};
</script>

<template>
  <v-card class="card">
    <div class="wrapper">
      <h2>Idea</h2>

      <v-form v-model="isValid" lazy-validation @keydown.enter.prevent>
        <v-text-field
          v-model="idea"
          label="Idea"
          @keydown.enter="addIdea"
        ></v-text-field>

        <v-btn
          color="success"
          :disabled="!isValid"
          @click="searchIdea"
          style="margin-left: auto"
        >
          Search
        </v-btn>
      </v-form>
    </div>
  </v-card>
</template>

<style>
.card {
  width: 60%;
  max-width: 500px;
  margin: 50px auto;
}

.wrapper {
  width: 80%;
  margin: 30px auto;
}
</style>
