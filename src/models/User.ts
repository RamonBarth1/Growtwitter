import { randomUUID } from "crypto";
import { users } from "../database/users";
import { Tweet, TweetType } from "./Tweet";
import { log } from "console";

export class User {
  private _id: string;
  private _tweets: Tweet[] = [];
  private _followers: User[] = [];
  private _following: User[] = [];
  private _likedBy: Tweet[] = [];

  constructor(
    private _name: string,
    private _username: string,
    private _email: string,
    private _password: string
  ) {
    this._id = randomUUID();

    if (users.some((user) => user.username === this._username)) {
      throw new Error("Username already exists");
    }

    users.push(this);
    console.log("User created successfully!");
    
  }

  get name(): string {
    return this._name;
  }

  get username(): string {
    return this._username;
  }

  get followers(): User[] {
    return this._followers;
  }
  get likedBy() {
    return this._likedBy;
  }

  get tweets() {
    return this._tweets;
  }

  sendTweet(content: string): Tweet {
    const newTweet = new Tweet(content, TweetType.Normal, this);
    this._tweets.push(newTweet);
    console.log(`<@${this._username}> Tweet sent successfully!`);
    return newTweet;
  }

  follow(follower: User): void {
    if (follower._username === this._username) {
      throw new Error("Você não pode seguir a si mesmo");
    }

    follower._followers.push(this);
    this._following.push(follower);
    console.log(
      `<@${follower._username}> foi seguido por <@${this._username}>`
    );
  }

  showTweetsLiked(): void {
    this._tweets.forEach((tweet) => {
      console.log(`@${this._username} : ${tweet.content}`);
      if (tweet.likes >= 2) {
        console.log(
          `[@${tweet.liked[0].username} and other ${
            tweet.liked.length - 1
          } user liked this]`
        );
      } else if (tweet.likes === 1) {
        console.log(`[${tweet.liked[0].username} liked this]`);
      }
    });
  }

  showTweets(): void {
    this._tweets.forEach((tweet) => {
      console.log(`@${this._username} : ${tweet.content}`);
      if (tweet.likes >= 2) {
        console.log(
          `[@${tweet.liked[0].username} and other ${
            tweet.liked.length - 1
          } user liked this]`
        );
      } else if (tweet.likes === 1) {
        console.log(`[${tweet.liked[0].username} liked this]`);
      }
      if (tweet.replys.length !== 0) {
        tweet.showReplies();
      }
    });
  }

  showFeed(): void {
    console.log("============================");
    console.log(`[ ---  Feed de ${this._username} --- ]`);
    console.log("============================");
    this.showTweets();

    this._following.forEach((user) => {
      user.showTweets();
    });
  }
}
