<template>
  <div>
    <router-link  class="btn btn-dark" :to="{ name: 'createPost' }">
      Create Post
    </router-link>
  </div>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-4" v-for="post in posts" :key="post.id">
    <div class="card">
      <router-link style="text-decoration:none;color:black;" :to="{ name: 'postId', params: { id: post.id } }" class="card-header">
        <div>
          {{ post.title }}
        </div>
      </router-link>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ post.body }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const posts = ref([]);
    const loading = ref(true);

    function getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          posts.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getPosts();

    return { posts, loading };
  },
};
</script>

<style>
</style>