<template>
  <h1>All Posts</h1>
  <div v-for="post in store.posts" :key="post.id">
    <router-link :to="`/posts/${post.id}`">
      <h3>{{ post.title }}</h3>
    </router-link>
  </div>
</template>

<script setup>
import { usePostStore } from "@/stores/post";

const store = usePostStore();
// import { onMounted, reactive } from "@vue/runtime-core";
// const posts = reactive([]);

onMounted: {
  store.getPosts();
}
</script>
