<script setup lang="ts">
import { computed } from "vue";

interface Props {
  value: string;
  label: string;
}
const textProps = defineProps<Props>();

interface Emits {
  (e: "update:value", value: string): void;
}
const emits = defineEmits<Emits>();

const textValue = computed<string>({
  get: () => textProps.value,
  set: (value: string) => emits("update:value", value),
});
</script>

<template>
  <v-text-field v-model="textValue" :label="textProps.label"> </v-text-field>
</template>
