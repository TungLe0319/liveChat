<template>
  <!-- <div class="container bg-dark mt-5 rounded-5 p-5 mb-5">
    <div class="row gy-auto">
      <div class="col-md-12 p-2 scrollY ">
        <div class="d-flex">
          <p class="me-4 mb-0">Creator</p>
          <p class="mb-0">createdAt</p>
        </div>

        
        <div id="hey"></div>
      </div>
      <div class="" v-for="g in groups">
        <GroupCard :group="g"/>

     
      </div>
      <div class="col-md-12">
        <form @submit.prevent="handleSubmit()" class="form-control d-flex justify-content-between">
          <div class="form-floating p-2">
            <textarea
            v-model="editable.text"
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style="height: 100px"
            ></textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>
          <button class="btn btn-outline-success fs-3 p-2" type="submit">POST</button>
        </form>
      </div>
    </div>
  </div> -->
  <div class="container-fluid bg-dark ">
     <div class="row ">
       <div class="col-md-1 bg-dark  p-2 room-icon-column text-center">
   <img src="//thiscatdoesnotexist.com" alt="" class="room-icon my-2" v-for="i in 15">
       </div>

       <div class="col-md-3 bg-light-dark px-0">
        <div class="room-title ">
          <button class="btn btn-outline-dark square text-light w-100 d-flex justify-content-between align-items-center">

            <p class="fw-bold fs-5 mb-0">  Lebattleground</p>
            <i class="mdi mdi-arrow-down-box fs-3"></i>
          </button>
        </div>
        <div class="chat-settings bg-dark rounded-2 mt-2 mx-2 d-flex justify-content-center">
          <button class="btn btn-dark lighten-20 text-light p-1 d-flex w-100">
            <div class="d-flex">

              <i class="mdi mdi-pound fs-5 text-muted"></i>
              <p class="mb-0 mx-2 fw-bold fs-5"> general</p> 
            </div>
          </button>
<div class="d-flex me-3 ">
  
          <button class="btn btn-dark lighten-20 p-1"> <i class="mdi mdi-account-plus  bg-transparent"></i></button>
          
          <button class="btn btn-dark lighten-20 p-1"> <i class="mdi mdi-cog-outline  bg-transparent"></i></button>
          
</div>
        </div>
       </div>


       <div class="col-md-8 bg-light2-dark d-flex flex-column align-content-between justify-content-between">
        <div class="chat-title-bar p-2 d-flex">
<div class="d-flex">
        <i class="mdi mdi-pound fs-4 text-muted"></i>
              <p class="mb-0 mx-2 fw-bold fs-5"> general</p> 
</div>
        </div>

         <div class="container">
            <div class="row">
              <div class="col-md-2 bg-dark lighten-20 rounded-4 mb-3">
                <button class="btn "> <i class="mdi mdi-plus-circle fs-3 text-light"></i>   </button>
              </div>
              <div class="col-md-7">
                <div class="mb-3">
                  <label for="" class="form-label">Message #general</label>
                  <textarea class="form-control bg-transparent border-0" name="" id="" rows="3"></textarea>
                </div>
              </div>
            </div>
          </div>
          
       </div>
     </div>
   </div>
   
</template>

<script>
import { computed,ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import GroupCard from "../components/GroupCard.vue";
import { chatsService } from "../services/ChatsService";
import { groupsService } from "../services/GroupsService";

import Pop from "../utils/Pop";

export default {
    setup() {
        onMounted(() => {
            getChats();
            getGroups()
        });
        const editable = ref({});
        async function getChats() {
            try {
                await chatsService.getChats();
            }
            catch (error) {
                Pop.error(error, "[]");
            }
        }
        async function getGroups() {
            try {
                await groupsService.getGroups()
            }
            catch (error) {
                Pop.error(error, "[]");
            }
        }
        return {
            editable,
            chats: computed(() => AppState.chats),
            account: computed(() => AppState.account),
            groups: computed(() => AppState.groups),
            async handleSubmit() {
                try {
                    await chatsService.addSupabaseChat(editable.value);
                    document.getElementById("hey").scrollIntoView(true);
                    //  document.querySelector('#empty').scrollTo
                }
                catch (error) {
                    Pop.error(error, "[handleSubmit]");
                }
            },
        };
    },
    components: { GroupCard }
};
</script>

<style scoped lang="scss">
.room-icon-column{
  height: 95vh;
}
.room-icon{
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
.scrollY{
  height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.container-fluid {
  height: 100vh;
}


</style>
