"use strict";
// welcome to the prisma getting started sedction prisma is an opensource next generation orm 
// it consista of the following parts
// prismaclient auto generated and type safe query builder for Node.js and TS
// prisma migrate migration tool to easily evolve your database schema from prototyping to production 
// prisma studio gui to view eand edit data in your database
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// automated migration means 
// db changes ofter yhou add more columns add new tables you have to do migration to keep syncing the db state 
// pre orm days manually update the prod db dev edrb
// there was no log of the changes made to the db
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.create({
            data: {
                name: 'Alice',
                email: 'alice@prisma.io',
            },
        });
        console.log(user);
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
