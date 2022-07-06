<script setup lang="ts">
import { mdiDelete } from "@mdi/js";

interface Props {
  items: Array<string>;
}

const listProps = withDefaults(defineProps<Props>(), {
  items: () => [],
});

interface Emits {
  (e: "delete", index: number): void;
}
const emits = defineEmits<Emits>();

const deleteItem = (index: number): void => {
  emits("delete", index);
};
</script>

<template>
  <slot name="title" />
  <v-list class="list">
    <v-list-item
      v-for="(item, i) in listProps.items"
      :key="i"
      class="list-item"
    >
      <v-list-item-title class="list-item-title">
        <v-tooltip :bottom="true" :z-index="300">
          <template v-slot:activator>
            <span>
              {{ item }}
            </span>
          </template>
          <span>{{ item }}</span>
        </v-tooltip>
      </v-list-item-title>
      <v-btn :icon="mdiDelete" variant="flat" @click="deleteItem(i)" />
    </v-list-item>
  </v-list>
</template>

<style>
.list {
  padding: 5%;
  margin: 5%;
  max-height: 300px;
}
.list-item {
  display: flex;
}
.list-item-title {
  flex: 1;
}
</style>
