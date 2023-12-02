import { randomUUID } from "crypto";
import { users } from "../database/users";
import { Tweet, TweetType } from "./Tweet";
import { tweets } from "../database/tweets";

export class User {
  private _id: string;
  private _name: string;
  private _username: string;
  private _email: string;
  private _password: string;
  private tweets: Tweet[];

  constructor(name: string, username: string, email: string, password: string) {
    this._id = randomUUID();
    this._name = name;
    this._username = username;
    this._email = email;
    this.tweets = [];
    this._password = password;

    if (users.find((user) => user.username == this._username)) {
      throw new Error("Username already exists");
    }

    users.push(this);
  }

  get name() {
    return this._name;
  }

  get username() {
    return this._username;
  }

  

  sendTweet(content:string): void {
    const newTweet = new Tweet (content,TweetType.Normal)
    this.tweets.push(newTweet)
    console.log(`@<${this._username}>: ${content} \n likes: replies`);
    
  }

  follow() {}

  showFeed() {}

  showTweets() {}

  toJSON() {
    return {
      name: this._name,
      username: this._username,
      email: this._email,
    };
  }
}
