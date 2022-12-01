<template>
  <div class="container-fluid bg-dark">
    <div class="row gy-auto">
      <div class="col-md-12 p-2 flip">
        <div class="d-flex">
          <p class="me-4 mb-0">Creator</p>
          <p class="mb-0">createdAt</p>
        </div>
        <div class="card p-4 bg-success rounded w-25">
          <p class="fs-5" v-for="c in chats">{{ c }}</p>
        </div>
      </div>
      <div class="col-md-12">
        <form @submit.prevent="handleSubmit()" class="form-control">
          <div class="form-floating">
            <textarea
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
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { supabaseService } from "../services/SubaseService.js";

export default {
  setup() {
    return {
      chats: computed(() => AppState.chats),
      async handleSubmit() {
        try {
          await supabaseService.addSupabaseChat();
        } catch (error) {
          Pop.error(error, "[handleSubmit]");
        }
      },
    };
  },
};
</script>

<style scoped lang="scss">
.container-fluid {
  height: 100vh;
}
.flip div,
p {
  transform: rotate(180deg);
}
</style>
