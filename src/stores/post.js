import { defineStore } from "pinia";
const apiUrl = "https://jsonplaceholder.typicode.com";
export const usePostStore = defineStore({
  id: "post",
  state: () => ({
    posts: [],
    post: {
      data: {},
      user: {},
      comments: {},
    },
    form: { title: "", body: "" },
  }),
  actions: {
    async getPosts() {
      const res = await fetch(`${apiUrl}/posts`);
      this.posts = await res.json();
    },

    async getSinglePost(id) {
      const res = await fetch(`${apiUrl}/posts/${id}`);
      const data = await res.json();
      const userId = data.userId;

      const userRes = await fetch(`${apiUrl}/users/${userId}`);
      const user = await userRes.json();

      const commentRes = await fetch(`${apiUrl}/comments?postId=${id}`);
      const comments = await commentRes.json();

      this.post = { data, user, comments };
    },
    async createPost() {
      await fetch(`${apiUrl}/posts`, {
        method: "post",
        body: JSON.stringify(this.form),
      });
    },
  },
});
