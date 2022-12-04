import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { supabase } from "../../supabase";
import { Chat } from "../models/Chats";

// import { chats } from "./FireBaseService";

class ChatsService {
  async addSupabaseChat(chat) {
    try {
      if (!AppState.account.id) {
        return error;
      }

      let data = { text: chat, creatorId: AppState.account.id };
      console.log(data);
      const res = await supabase.from("Chats").upsert(data).select();
      // const res = await supabase.from("chats")
      let chat = new Chat(res.data[0])
      this.addOrSkipArray(AppState.chats, chat);
    } catch (error) {
      Pop.error(error);
    }
  }

  async getChats() {
    try {
      const res = await supabase.from("Chats").select("*");

      
      console.log(res.data);
      // AppState.chats = res.data.map(c => new Chat(c))
      // AppState.chats.filter(c=> c.text==null || c.text == Object)
      // console.log(AppState.chats);
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

export const chatsService = new ChatsService();
