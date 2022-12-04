import { supabase } from "../../supabase";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";

class GroupsService {
  async getGroups() {
    try {
      const res = await supabase.from("groups").select();
      console.log(res.data);
      AppState.groups = res.data;
    } catch (error) {
      Pop.error(error);
    }
  }

  async createGroup(groupData) {
    const res = await supabase.from("groups").upsert(groupData).select();
    console.log(res);
  }
  async joinGroup(memberData) {
    const res = await supabase.from("member").upsert(memberData).select();
    console.log(res);
  }
  async getGroupsChats(groupId){
    const res = await (await supabase.from("Chats").select("*")).eq()
  }
}
export const groupsService = new GroupsService();
