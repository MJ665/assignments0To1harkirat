import { getClient } from "./utils";
async function main() {
    try{const client = getClient()
    const joinQuery = `
    select u.id u.username u.email a.title a.description a.id a.done 
    from users u join todos a on u.id = a.userId
    where u.email = $1
    `
    const joinData = ["hariom@gmail.com"]
    const user =await( await client).query(joinQuery,joinData)
    console.log(user)


    console.log("the get data successful " + user.rows[0] )}catch(err){console.error(err)}
}
main ()







