<template>
  <div class="container-fluid bg-dark">
   <!-- <ChatComponent/> -->
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import ChatComponent from "../components/ChatComponent.vue";

export default {
    setup() {
        return {
            chats: computed(() => AppState.chats),
            async handleSubmit() {
                try {
                }
                catch (error) {
                    Pop.error(error, "[handleSubmit]");
                }
            },
        };
    },
    components: { ChatComponent }
};
</script>

<style scoped lang="scss">
.container-fluid {
  height: 100vh;
}
.flip div,p{
  transform: rotate(180deg);
}
</style>
