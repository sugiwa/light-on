<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

import { mdiMenu, mdiHome, mdiLightbulbOn10, mdiAccount } from "@mdi/js";

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-btn icon @click="toggleDrawer">
        <v-icon :icon="mdiMenu" />
      </v-btn>

      <router-link to="/sign_up" class="header-link">
        <v-btn>
          <v-icon :icon="mdiAccount" />
          <span>User</span>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-item-group>
          <router-link to="/" class="navigation-link">
            <v-list-item>
              <v-icon :icon="mdiHome" />
              <v-list-item-title>HOME</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/idea" class="navigation-link">
            <v-list-item>
              <v-icon :icon="mdiLightbulbOn10" />
              <v-list-item-title>IDEA</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/about" class="navigation-link">
            <v-list-item>
              <v-icon :icon="mdiMenu" />
              <v-list-item-title>ABOUT</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
@import "@/assets/base.css";
.navigation-link {
  color: black;
  text-decoration: none;
}
.header-link {
  color: white;
  text-decoration: none;
}

</style>
