<template>
  <div class="container-fluid bg-dark">
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
        <form @submit.prevent="handleSubmit()" class="form-control">
          <div class="form-floating">
            <textarea
            v-model="editable.text"
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style="height: 100px"
            ></textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>
          <button type="submit">POST</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed,ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../AppState.js";
import GroupCard from "../components/GroupCard.vue";
import { supabaseService } from "../services/SubaseService.js";
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
                await supabaseService.getChats();
            }
            catch (error) {
                Pop.error(error, "[]");
            }
        }
        async function getGroups() {
            try {
                await supabaseService.getGroups()
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
                    await supabaseService.addSupabaseChat(editable.value);
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


.scrollY{
  height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.container-fluid {
  height: 100vh;
}

</style>
