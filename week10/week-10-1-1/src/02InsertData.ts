import { getClient } from "./utils";
async function main() {
    try{const client = getClient()
    const userQuery = `insert into users (username , email, password) values ($1, $2 , $3) returning id`
    const userData = ["hariOm", "hariom@gmail.com","hariom"]
    const user =await( await client).query(userQuery, userData)
    console.log(user)
    const todoQuery =`insert into todos (title , description,userId) values ($1,$2,$3) returning id;`
    const todoData = ["hariOm's title", "hariOm's descriptiion", user.rows[0].id]
    const todo =await (await client).query(todoQuery,todoData)
    console.log("the data insertion successful")}catch(err){console.error(err)}
}
main ()