import { getDate } from "../utils/GetDate"

export class Chat{
  constructor(data){
    this.id = data.id || false
    this.text = data.text
    this.creatorId = data.creatorId
    this.created_at = getDate(data.created_at)
    this.updated_at = getDate(data.updated_at)
    this.groupId = data.groupId || false

    
  }
}