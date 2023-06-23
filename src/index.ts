import Post from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
//given that microORM.init returns a promise, set
//microORM to the variable 'orm'.
//Corrected based on accuired knowledge so far
const main = async () => {
  const post = new Post(13, "test");
  console.log(post);
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: "postgres",
    type: "postgresql",
  });
};
main();
