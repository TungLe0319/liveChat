<template>
  <div class="about">
    <h1>This is the about page</h1>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { groupsService } from '../services/GroupsService';

import Pop from '../utils/Pop';

export default {
  setup() {
    onMounted(() => {
      joinGroup()
    })
    async function joinGroup(){
      try {
          await groupsService.joinGroup()
        } catch (error) {
          Pop.error(error)
        }
    }
    async function getGroupsChats(){
      try {
          await groupsService.getGroupsChats()
        } catch (error) {
          Pop.error(error)
        }
    }
    return {

    }
  }
}
</script>