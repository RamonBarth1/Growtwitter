import { randomUUID } from "crypto";
import { User } from "./User";


export enum TweetType {
  Normal = "normal",
  Reply = "reply",
}

export class Tweet {
  private _id: string;
  private _likes: number = 0;
  private _replys: Tweet[] = [];
  private _liked: User[] = [];

  constructor(
    private _content: string,
    protected type: TweetType,
    private creator: User
  ) {
    this._id = randomUUID();
  }

  get content(): string {
    return this._content;
  }

  get replys(): Tweet[] {
    return this._replys;
  }
  get liked(): User[] {
    return this._liked;
  }

  get likes(): number {
    return this._likes;
  }

  reply(user: User, content: string) {
    const newReply = new Tweet(content, TweetType.Reply, user);
    this._replys.push(newReply);
    user.tweets.push(newReply);
    console.log("Reply sent successfully!");
  }

  like(user: User): void {
    if (!this._liked.includes(user)) {
      this._likes++;
      this._liked.push(user);
      user.likedBy.push(this);
      console.log(`@${user.username} liked this tweet`);
    }
  }

  showReplies() {
    if (this._replys.length != 0) {
      this.replys.forEach((reply) => {
        console.log(`> @${reply.creator.username}:  ${reply.content}`);
      });
      console.log("--------------------------------------------");
    } else {
      console.log("No replies.");
    }
  }

  showRepliesComplete(user:User) {
    console.log(`@${user.username} : ${this._content}`);
    if (this._replys.length != 0) {
      this.replys.forEach((reply) => {
        console.log(`> @${reply.creator.username}:  ${reply.content}`);
      });
      console.log("--------------------------------------------");
    } else {
      console.log("No replies.");
    }
  }
}
