<template>
  <div>
    <h1>{{ store.post.data.title }}</h1>
    <p>{{ store.post.data.body }}</p>
    <br />
    <h3>User</h3>
    <p>{{ store.post.user.name }}</p>
    <br />
    <h3>Comments ({{ store.post.comments.length }})</h3>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "@vue/runtime-core";
import { useRoute } from "vue-router";
const route = useRoute();

import { usePostStore } from "@/stores/post";
const store = usePostStore();

onMounted: {
  store.getSinglePost(route.params.id);
}
</script>
