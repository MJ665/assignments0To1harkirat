import { getClient } from "./utils";
async function main() {
    const client = getClient()
    const userQuery = `insert into users (username , email, password) values ("$1", "$2" , "$3") returning id`
    const userData = ["hariOm", "hariom@gmail.com","hariom"]
    const user = (await client).query(userQuery, userData)
    const todoQuery `insert into todos ()`
}
main ()