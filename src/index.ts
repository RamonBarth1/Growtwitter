import { stringify } from "querystring";
import { users } from "./database/users";
import { User } from "./models/User";
import { json } from "stream/consumers";
import { TweetType } from "./models/Tweet";
import { tweets } from "./database/tweets";






const usuario = new User ("Ramon","ramonbarth","ramonbarth@gmail.com","senha123")
const usuario2 = new User ("Ramon","ramonbarth2","ramonbarth@gmail.com","senha123")


usuario.sendTweet("Eu sou novo aqui")

// console.log(usuario);

console.log(JSON.stringify(tweets));






