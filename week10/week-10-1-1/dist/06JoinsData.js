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
        try {
            const client = (0, utils_1.getClient)();
            const joinQuery = `
    select u.id, u.username, u.email,u.password, a.title, a.description, a.id, a.done 
    from users u join todos a on u.id = a.userId
    where u.email = $1;
    `;
            const joinData = ["hariom@gmail.com"];
            const result = yield (yield client).query(joinQuery, joinData);
            console.log("the get data successful ");
            result.rows.forEach(element => {
                console.log(element);
            });
        }
        catch (err) {
            console.error(err);
        }
    });
}
main();
