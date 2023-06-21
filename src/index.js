"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
//given that microORM.init returns a promise, set
//microORM to the variable 'orm'.
//Corrected based on accuired knowledge so far
const orm = await core_1.MikroORM.init({
    dbName: "postgres",
    type: "postgresql",
});
