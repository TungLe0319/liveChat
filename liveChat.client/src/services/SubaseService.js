import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { supabase } from "../../supabase";

// import { chats } from "./FireBaseService";

class SupabaseService {
  async addSupabaseChat(chat) {
    try {
      let data = { text: chat };
      // console.log(chat);
      const res = await supabase.from("chats").upsert(data).select();
      // const res = await supabase.from("chats")
      console.log(res.data, "data");
      this.addOrSkipArray(AppState.chats, res.data[0]);
    } catch (error) {
      Pop.error(error);
    }
  }

  async getChats() {
    try {
      const res = await supabase.from("chats").select();
      AppState.chats = res.data;
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
}

export const supabaseService = new SupabaseService();
