<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  
  <div v-else class="col-md-4" v-for="user in users" :key="user.id">
    <UserCardView :user="user" />
  <!-- </div>
   <div class="container">
    <div>
  <b-button>Button</b-button>
  <b-button variant="danger">Button</b-button>
  <b-button variant="success">Button</b-button>
  <b-button variant="outline-primary">Button</b-button>
</div> -->

  </div>
  <nav  aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" ><button class="page-link" @click="handlePrevClick" :disabled="disable">Previous</button></li>
    <li class="page-link" >{{pageNum}}</li>
    <li class="page-item" @click="handleClick"><a class="page-link" href="#">Next</a></li>
    
  </ul>
</nav>
</template>

<script>
import axios from "axios";
import { ref, watch } from "vue";
import UserCardView from "@/components/users/CardView.vue";
// import { BButton } from 'bootstrap-vue'
// Vue.component('b-button', BButton)
// import {Bpagination} from "bootstrap-vue"
export default {
  components: {
    UserCardView,
    // BButton 
  },
  setup() {
    const disable = ref(true)
    const users = ref([]);
    const loading = ref(true);
     const pageNum= ref(1)
     const breakNext = ref(0)
     const totalRows= ref(200);
     const temp = ref(false)
    //  const pageOptions: [5, 10, 22],
    const  currentPage= ref(1);
    function getUsers(pageNum) {
      axios
        .get(`https://60ce519991cc8e00178dcda8.mockapi.io/orders?p=${pageNum}&l=${9}`)
        .then(function (response) {
          users.value = response.data;
          breakNext.value = response.data.length
          loading.value = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getUsers(1);
    function handlePrevClick (){
      if(pageNum.value==2) temp.value= true 
      pageNum.value --;
     
      getUsers(pageNum.value)
    }
 async function handleClick  () {
        if (breakNext.value!==9){
        return true
        }
       await axios
        .get(`https://60ce519991cc8e00178dcda8.mockapi.io/orders?p=${pageNum.value}&l=${9}`)
        .then(function (response) {
        if(response.data[0]) {temp.value = true
        console.log("1",temp.value)}

        })
        .catch(function (error) {
          console.log(error);
        });
      if(temp.value){
          temp.value = false;
        pageNum.value++
          console.log("2",temp.value)
          getUsers(pageNum.value);
        }
      
    }
    watch(temp , ()=>{
      if(!temp.value ){
        disable.value  = false
      }
      else{
        disable.value = true
      }
      
    })
    return { users, loading,pageNum,totalRows,currentPage, disable,handleClick,handlePrevClick};
  },
 
};
// onMounted(() => {
//    axios
//         .get(`https://60ce519991cc8e00178dcda8.mockapi.io/orders?p=${1}&l=${9}`)
//         .then(function (response) {
//           users.value = response.data;
//           loading.value = false;
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     }
// )
</script>

<style scopped>
nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>