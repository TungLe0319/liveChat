<template>
 
  <div class="container-fluid bg-dark ">
     <div class="row ">
      <!-- groupRooms -->
       <div class="col-md-1 bg-dark  p-2 room-icon-column text-center">
   <img src="//thiscatdoesnotexist.com" alt="" class="room-icon my-2" v-for="i in 15" @click="makeActiveGroup()">
       </div>
<!-- !groupRooms -->
<!-- chatRoom -->
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


<!-- Whos In Channel -->
<div class="p-3 d-flex">
<img src="//thiscatdoesnotexist.com" alt=""  class="rounded-circle"  width="30" >
<p class="mb-0 ms-3 text-grey fs-5"> online user name  </p>
</div>


       </div>
<!-- !chatRoom -->

       <div class="col-md-8 bg-light2-dark d-flex flex-column align-content-between justify-content-between">
        <div class="chat-title-bar p-2 d-flex">
<div class="d-flex">
        <i class="mdi mdi-pound fs-4 text-muted"></i>
              <p class="mb-0 mx-2 fw-bold fs-5"> general</p> 
</div>
        </div>

<div class="chat-body container-fluid">


    <div class="row scrollY">
  <ChatComponent   v-for="c in chats "  :chat="c" />
  <div id="hey"></div>
    </div>
 
  

</div>
         <div class=" chat-form container">
            <div class="row bg-dark lighten-20 rounded-4 mb-3 pt-2">
              <div class="col-md-2 bg-dark lighten-20 rounded-4 mb-3">
                <button class="btn "> <i class="mdi mdi-plus-circle fs-3 text-light"></i>   </button>
              </div>
              <div class="col-md-7">
                <div class="mb-3">
          <form @submit.prevent="handleSubmit()" class="d-flex align-items-center">

            <textarea class="form-control text-area text-light bg-transparent border-0" v-model="editable" name="" id="" rows="2" placeholder="Message #general"></textarea>
            <button type="submit" class="btn btn-outline-dark">Submit</button>
          </form>
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
import ChatComponent from "../components/ChatComponent.vue";
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
        const editable = ref("");
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
                    document.getElementById("hey").scrollIntoView();
                    Pop.success()
                    //  document.querySelector('#empty').scrollTo
                }
                catch (error) {
                    Pop.error(error, "[handleSubmit]");
                }
            },
        };
    },
    components: { GroupCard, ChatComponent }
};
</script>

<style scoped lang="scss">

.text-area::placeholder{
  font-size: 1.25rem ;
}
.room-icon-column{
  height: 90vh;
}
.room-icon{
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
.scrollY{
  height: 79vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 1.5em;
}


</style>
