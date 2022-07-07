<script setup lang="ts">
import { computed, ref } from "vue";
import CustomTextField from "@/components/CustomTextField.vue";

const isValid = computed<boolean>(() => {
    return false
})
const email = ref("");
const password = ref("");
</script>

<template>
  <v-card class="card">
    <div class="wrapper">
      <h2>Sign up</h2>

      <v-form v-model="isValid" lazy-validation @keydown.enter.prevent>
        <custom-text-field v-model:value="email" label="Email" />
        <custom-text-field v-model:value="password" label="Password" />

        <v-btn
          color="success"
          :disabled="!isValid"
          @click="() => {}"
          style="margin-left: auto"
        >
          Sign up
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
