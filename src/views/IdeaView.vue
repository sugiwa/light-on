<script setup lang="ts">
import { ref } from "vue";

const idea = ref("");
</script>

<template>
  <v-card class="card">
    <div class="wrapper">
      <h2>Idea</h2>

      <v-form>
        <v-text-field v-model="idea" label="Idea"></v-text-field>

        <v-btn color="success"> Search </v-btn>
      </v-form>
    </div>
    {{ idea }}
  </v-card>
</template>

<style>
.card {
  width: 60%;
  margin: 50px auto;
}

.wrapper {
  width: 80%;
  margin: 30px auto;
}
</style>
