import { MikroORM } from "@mikro-orm/core";
//given that microORM.init returns a promise, set
//microORM to the variable 'orm'.
//Corrected based on accuired knowledge so far
const orm = await MikroORM.init({
  dbName: "postgres",
  type: "postgresql",
});
