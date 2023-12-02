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
  private _followers: User[];
  private _following: User[];

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

  get followers() {
    return this._followers;
  }
  sendTweet(content: string): void {
    const newTweet = new Tweet(content, TweetType.Normal);
    this.tweets.push(newTweet);
    console.log(`@<${this._username}>: ${content} \n likes: replies`);
  }

  follow(follower: User) {
    if (follower._username === this._username) {
      throw new Error("Você não pode seguir a si mesmo");
    } else {
      follower._followers.push(this);
      this._following.push(follower);
      console.log(
        `<${follower._username}> foi seguido por <${this._username}>`
      );
    }
  }
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
