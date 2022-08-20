import { defineStore } from "pinia";

export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    posts: [],
  }),
  actions: {
    async getPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      this.posts = await res.json();
    },
  },
});
