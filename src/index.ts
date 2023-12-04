import { User } from "./models/User";

console.log("============================");
console.log("[ ---  Feature #1 --- ]");
console.log("============================");

const usuario = new User(
  "Ramon",
  "ramonbarth",
  "ramonbarth@gmail.com",
  "senha123"
);
const usuario2 = new User(
"Ednamar", 
"mara", 
"mara@gmail.com", 
"senha123"
);
const usuario3 = new User(
  "Manuela",
  "manubarth",
  "manubarth@gmail.com",
  "senha2"
);

const usuario4 = new User(
  "Roberto",
  "josebarth",
  "josebarth@gmail.com",
  "senha3"
);

console.log("============================");
console.log("[ ---  Feature #2 --- ]");
console.log("============================");

const tweet1 = usuario.sendTweet("Eu adoro comer bolacha");
const tweet2 = usuario2.sendTweet("Hoje está muito calor");
const tweet3 = usuario4.sendTweet("Queria que caisse uma chuvarada")


console.log("============================");
console.log("[ ---  Feature #4 --- ]");
console.log("============================");

usuario.follow(usuario2);
usuario.follow(usuario4)

console.log("============================");
console.log("[ ---  Feature #5 --- ]");
console.log("============================");

tweet1.like(usuario2);
tweet1.like(usuario3)
tweet1.like(usuario4)
tweet2.like(usuario4)


console.log("============================");
console.log("[ ---  Feature #6 --- ]");
console.log("============================");

tweet1.reply(usuario3, "Eu também gosto !");
tweet1.reply(usuario4, "Eu gosto de bolacha de chocolate");
tweet2.reply(usuario4,"Psé queria tomar um banho de piscina")


console.log("============================");
console.log("[ ---  Feature #7 --- ]");
console.log("============================");

usuario.showTweetsLiked();
usuario2.showTweetsLiked()


console.log("============================");
console.log("[ ---  Feature #8 --- ]");
console.log("============================");

tweet1.showRepliesComplete(usuario)
tweet2.showRepliesComplete(usuario2)

console.log("============================");
console.log("[ ---  Feature #9 --- ]");
console.log("============================");

usuario.showFeed()

console.log("============================");
console.log("[ ---  Feature #3 --- ]");
console.log("============================");

usuario.showTweets()



