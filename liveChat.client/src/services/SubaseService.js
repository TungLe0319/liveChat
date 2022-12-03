import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { supabase } from "../../supabase";

// import { chats } from "./FireBaseService";

class SupabaseService {
  async addSupabaseChat(chat) {
    try {
      console.log(chat);
      let data = { text: chat };
      // console.log(chat);
      const res = await supabase.from("Chats").upsert(data).select();
      // const res = await supabase.from("chats")
      console.log(res.data, "data");
      this.addOrSkipArray(AppState.chats, res.data[0]);
    } catch (error) {
      Pop.error(error);
    }
  }

  async getAccount(){
    try {
       const res =  await supabase.from("accounts").select()
      } catch (error) {
        Pop.error(error)
      }

  }

  async getChats() {
    try {
      const res = await supabase.from("Chats").select();
      AppState.chats = res.data;
    } catch (error) {
      Pop.error(error);
    }
  }
  async getGroups() {
    try {
      const res = await supabase.from("groups").select();
      console.log(res.data);
      AppState.groups = res.data;
    } catch (error) {
      Pop.error(error);
    }
  }

  addOrSkipArray(arr, item) {
    let found = arr.find((i) => i.id == item.id);
    console.log(found);
    if (!found) {
      arr.push(item);
    }
  }
  async createGroup(groupData){
    const res = await supabase.from("groups").upsert(groupData).select()
    console.log(res);
  }
  async joinGroup(memberData){
    const res = await supabase.from("member").upsert(memberData).select()
    console.log(res);
  }
}

export const supabaseService = new SupabaseService();
