import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
// import { supabase } from "../utils/Supabase";
import { chats } from "./FireBaseService";


const supabase = useSupabase()

class SupabaseService {
  async addSupabaseChat(chat) {
    try {
      let data = {text: chat, createdAt: new Date(Date.now()) };
      // console.log(chat);
      const res = await supabase.from("chats").upsert(data)
      console.log(res.data, "data");
      addOrSkipArray(AppState.chats, res.data[0]);
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

  
}

export const supabaseService = new SupabaseService();

export function addOrSkipArray(arr, item) {
    let found = arr.find((i) => i.id == item.id);
    console.log(found);
    if (!found) {
      arr.push(item);
    }
  }