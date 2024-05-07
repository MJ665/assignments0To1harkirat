"use strict";
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
const utils_1 = require("./utils");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const userQuery = `
create table  if not exists users (
    id serial primary key,
    username varchar(50) unique not null,
    email varchar(250) unique not null,
    password varchar (250) not null,
    created_at timestamp with time zone default CURRENT_TIMESTAMP
);
`;
        const client = yield (0, utils_1.getClient)();
        yield client.query(userQuery);
        const todoQuery = `
create table  if not exists todos (
    id serial primary key ,
    title varchar (250) unique not null,
    description varchar (250) ,
    userId integer references users(id),
    done boolean default false
);`;
        yield client.query(todoQuery);
        console.log("the creation of the table was successfull");
    });
}
main();
