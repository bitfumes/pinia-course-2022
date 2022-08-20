<template>
  <button @click="store.increment">+</button>
  {{ store.counter }}
  <button @click="store.decrement">-</button>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
</script>
