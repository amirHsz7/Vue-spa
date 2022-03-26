<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <h3>This is a very simple project for practice VueJs</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          totam, ratione, voluptas eveniet soluta incidunt itaque optio beatae
          id temporibus, ex exercitationem sint ad earum in sed? Quam, cum sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          totam, ratione, voluptas eveniet soluta incidunt itaque optio beatae
          id temporibus, ex exercitationem sint ad earum in sed? Quam, cum sunt.
        </p>

      </div>
    </div>
    <router-link  style="text-decoration:none;color:black;" class="btn btn-light" :to="{name:'posts'}">See all Posts</router-link>
    <div class="row mt-3">
      
        <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-4 mb-3" v-for="post in posts" :key="post.id">
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
          for(let i = 0 ; i<=5;i++){
            posts.value.push(response.data[i]);
            if(i==5) return loading.value = false
          }
          
          console.log(posts.value)
          // posts.value.slice(-10)
          // loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getPosts();
    
    console.log()
    return { posts, loading };
  },
};
</script>

<style>
.linkIcon{
background-color: rgba(243, 243, 243, 0.596);
}
</style>