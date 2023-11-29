import { randomUUID } from "crypto";
import { users } from "../database/users";

export class User {
  private _id: string;
  private _name: string;
  private _username: string;
  private email: string;
  private password: string;
  private tweets: string[];

  constructor(name: string, username: string, email: string, password: string) {
    this._id = randomUUID();
    this._name = name;
    this._username = username;
    this.email = email;
    this.tweets = [];
    this.password = password;

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

  sendTweet() {}

  follow() {}

  showFeed() {}

  showTweets() {}

  toJSON() {
    return {
      name: this._name,
      username: this._username,
      email: this.email,
    };
  }
}
