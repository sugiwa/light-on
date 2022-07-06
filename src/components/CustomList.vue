<script setup lang="ts">
interface Props {
  items: Array<string | number>;
}

const listProps = withDefaults(defineProps<Props>(), {
  items: () => [1, 2, 3, 4, 5],
});

console.log(listProps.items);
</script>

<template>
  <slot name="title" />
  <v-list>
    <v-list-item v-for="(item, i) in listProps.items" :key="i">
      <v-list-item-title v-text="item"></v-list-item-title>
    </v-list-item>
  </v-list>
</template>
