import { randomUUID } from "crypto";

export class Tweet {
  private _id: string;
  constructor(protected content: string, protected type: string) {
    this._id = randomUUID();
  }


  reply(){}

  like(){}

  show(){}

  showReplies(){}
}
