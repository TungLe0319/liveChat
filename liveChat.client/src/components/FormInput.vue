<template>
  <div class="component">
    <form @submit.prevent="createGroup()">
      <input type="text" v-model="editable.name">
      <button type="submit">create</button>
    </form>


  </div>
</template>


<script>
import { computed } from '@vue/reactivity';

import { ref } from 'vue';
import { AppState } from '../AppState';
import { supabaseService } from '../services/SubaseService';
import Pop from '../utils/Pop';

export default {
  setup(){
    const editable = ref({})
    return {
      editable,
      account: computed(() => AppState.account),
      async createGroup(){
        try {
            editable.value.creatorId = this.account?.id
            console.log(editable.value);
            await supabaseService.createGroup(editable.value)
          } catch (error) {
            Pop.error(error)
          }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>