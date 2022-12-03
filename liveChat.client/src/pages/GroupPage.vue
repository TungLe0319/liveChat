<template>
  <div class="about">
    <h1>This is the about page</h1>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { supabaseService } from '../services/SubaseService';
import Pop from '../utils/Pop';

export default {
  setup() {
    onMounted(() => {
      joinGroup()
    })
    async function joinGroup(){
      try {
          await supabaseService.joinGroup()
        } catch (error) {
          Pop.error(error)
        }
    }
    return {

    }
  }
}
</script>