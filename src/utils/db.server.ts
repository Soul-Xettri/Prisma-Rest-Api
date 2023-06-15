//this code helps to not create multiple prismaclient everytime the sever reload to the database.

import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global{
    var __db: PrismaClient | undefined;
}

if (!global.__db){
    global.__db = new PrismaClient();
}

db = global.__db;

export { db };