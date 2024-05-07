import { getClient } from "./utils";
async function main() {
    try{const client = getClient()
    const userQuery = `select * from users where email = $1`
    const userData = ["hariom@gmail.com"]
    const user =await( await client).query(userQuery, userData)
    console.log(user)


    console.log("the get data successful " + user.rows[0] )}catch(err){console.error(err)}
}
main ()







