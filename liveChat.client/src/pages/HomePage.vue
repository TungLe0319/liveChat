<template>
  <div class="container-fluid bg-dark">
    <div class="row gy-auto">
      <div class="col-md-12 p-2  flip">
        <div class="d-flex">
          <p class="me-4 mb-0">Creator</p>
          <p class="mb-0">createdAt</p>
        </div>
        <div class="card p-4 bg-success rounded w-25">
          <p class="fs-5">content</p>
        </div>
      </div>
      <div class="col-md-12 fixed-bottom">
        <form @submit.prevent="handleSubmit()" class="form-control">
          <textarea name="" id="" cols="10" rows="10"> </textarea>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";

export default {
  setup() {
    return {
      chats:computed(()=> AppState.chats),
      async handleSubmit() {
        try {
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
.flip div,p{
  transform: rotate(180deg);
}
</style>
