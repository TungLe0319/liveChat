<template>
  <div class="chatContainer text-light  selectable container animate__animated animate__fadeIn" v-if="chat" >
    <div class="row ">
      <div 
      :class="newChat? ' border-top border-danger border-3' : ''"
      class="col-12 d-flex  align-items-center p-3  position-relative  ">
        <span v-if="newChat" class="badge rounded-pill text-bg-danger new-chat-badge">New</span>
        <div class="creator-image me-3">
          <img src="//thiscatdoesnotexist.com" alt="" class="profile-icon">
        </div>
        <div class="">

          <div class="name-createdAt d-flex">
<p class="mb-0  fs-5 me-2 fw-bold"> creator Name </p> 
            <span class="mt-2 time">{{ new Date(chat.created_at).toLocaleDateString() }}</span>
          </div>
          <div
            class="bg-c2 rounded-3 p-2 max-width"
            :class="!account ? 'bg-success' : 'bg-c1 '"
          >
            <span class=""  >{{ chat.text }}</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { Chat } from "../models/Chats";

export default {
  props: {
    chat: { type: Chat, required: true },
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      chats : computed(()=> AppState.chats),
      newChat: computed(()=> {
        let chat = AppState.chats[AppState.chats.length -1]
        return chat.id == props.chat.id})
    };
  },
};
</script>

<style lang="scss" scoped>

.new-chat-badge{
  position: absolute;
  top: -12%;
  right: 10%;
}

.profile-icon{
    border-radius: 50%;
  width: 60px;
  height: 60px;
}
.max-width {
  max-width: 75%;
}
.time {
  opacity: 60%;
  font-size: 12px;
}

.profilePic:hover {
  transform: scale(1.04);
  transition: all 0.75s ease;
  filter: saturate(120%);
  filter: brightness(120%);
}
</style>
