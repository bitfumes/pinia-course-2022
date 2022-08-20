<template>
  <button @click="incr">+</button>
  {{ counter }}
  <button @click="decr">-</button>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const counter = ref(0);
function incr() {
  counter.value++;
}
function decr() {
  counter.value--;
}
</script>
