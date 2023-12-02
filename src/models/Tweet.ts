import { randomUUID } from "crypto";

export enum TweetType {
  Normal = "normal",
  Reply = "reply",
}

export class Tweet {
  private _id: string;

  constructor(protected content: string, protected type: TweetType) {
    this._id = randomUUID();
  }

  reply() {}

  like() {}

  show() {}

  showReplies() {}
}
