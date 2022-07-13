<script setup lang="ts">
import { computed, ref } from "vue";
import CustomTextField from "@/components/CustomTextField.vue";

const isValid = computed<boolean>(() => {
  return false;
});

const emailRules = [(v: string) => !!v || "Email is required"];
const passwordRules = [(v: string) => !!v || "Password is required"];

const email = ref("");
const password = ref("");
</script>

<template>
  <v-card class="card">
    <div class="wrapper">
      <h2>Log in</h2>

      <v-form
        v-model="isValid"
        lazy-validation
        @keydown.enter.prevent
        ref="form"
      >
        <custom-text-field
          v-model:value="email"
          label="Email"
          :rules="emailRules"
        />
        <custom-text-field
          v-model:value="password"
          label="Password"
          :rules="passwordRules"
        />

        <v-btn
          color="success"
          :disabled="!isValid"
          @click="() => {}"
          style="margin-left: auto"
        >
          Log in
        </v-btn>
      </v-form>

      <router-link to="/sign_up" class="link">
        <p>Sign up</p>
      </router-link>
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

.link {
  color: #1a0dab;
}
</style>
