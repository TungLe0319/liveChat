// import { supabase } from '../../supabase'
import { useRoute } from "vue-router";
import { supabase } from "../../supabase";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { api } from "./AxiosService";

class AccountService {
  async getAccount(user) {
    try {
      // console.log(user);
      const res = await supabase.from("accounts").select("*").eq("id", user.id).single();

      console.log(res.data);
      if (!res) {
        this.createProfile(user);
        return;
      }
      AppState.account = res.data;
    } catch (err) {
      logger.error("HAVE YOU STARTED YOUR SERVER YET???", err);
    }
  }
  async createProfile(user) {
    try {
      const res = await supabase.from("accounts").upsert(user).select().single();
      console.log(res.data);
    } catch (error) {
      Pop.error(error);
    }
  }
}

export const accountService = new AccountService();
