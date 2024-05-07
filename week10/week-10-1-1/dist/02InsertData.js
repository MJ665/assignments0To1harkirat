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
        const client = (0, utils_1.getClient)();
        const userQuery = `insert into users (username , email, password) values ($1, $2 , $3) returning id`;
        const userData = ["hariOm", "hariom@gmail.com", "hariom"];
        const user = yield (yield client).query(userQuery, userData);
        console.log(user);
        const todoQuery = `insert into todos (title , description,userId) values ($1,$2,$3) returning id;`;
        const todoData = ["hariOm's title", "hariOm's descriptiion", user.rows[0].id];
        const todo = (yield client).query(todoQuery, todoData);
        console.log("the data insertion successful");
    });
}
main();
