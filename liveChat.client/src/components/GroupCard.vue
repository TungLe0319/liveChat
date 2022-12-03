<template>
  <router-link :to="{ name: 'Group', params:{id : group.id}}">
    <div
      class="card text-dark elevation-3 mx-4 my-2"
      style="width: 18rem"
    >
      <div class="card-body">
        <div class="border-bottom border-dark border-3">
          <h5>Title</h5>
        </div>
        <div class="d-flex justify-content-end text-shadow mt-2">
          <h6>{{ group.name }}</h6>
        </div>
        <div>
          <small
            >Description Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Rerum blanditiis atque quaerat qui architecto!</small
          >
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    group: { type: Object },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
