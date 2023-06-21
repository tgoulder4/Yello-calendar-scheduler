import { MikroORM } from "@mikro-orm/core";
//given that microORM.init returns a promise, set
//microORM to the variable 'orm'.
const main = async () => {
  const orm = await MikroORM.init({
    dbName: "postgres",
    type: "postgresql",
  });
  console.log(orm);
};
main();
