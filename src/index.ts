import { MikroORM } from "@mikro-orm/core";
//given that microORM.init returns a promise, set
//microORM to the variable 'orm'.
const main = async () => {
  try {
    const orm = await MikroORM.init({
      dbName: "postgres",
      type: "postgresql",
    });
  } catch (error) {
    console.log(error);
  }
};
main();
