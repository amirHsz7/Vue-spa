<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div id="container" v-else class="col-md-4">
    <UserCardViwe :user="user" />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import UserCardViwe from "@/components/users/CardView.vue";
import { useRoute } from "vue-router";
import router from "@/router.js"
export default {
  components: {
    UserCardViwe,
  },
  setup() {
    const user = ref({});
    const loading = ref(true);
    const route = useRoute();
    setTimeout(()=>{
    if(loading.value==true) router.push({ name: 'NotFound' })
    },5000)
    function getUser() {
      axios
        .get(`https://60ce519991cc8e00178dcda8.mockapi.io/orders/${route.params.id}`)
        .then(function (response) {
          user.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    getUser();

    return { user, loading };
  },
};
</script>

<style>

</style>