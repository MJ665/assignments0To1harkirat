import { getClient } from "./utils";
async function main() {
    try{const client = getClient()
    // const userQuery = `update users set password = $1 where email = $2 `
    // const userData = ["hariOmNewPassword", "hariom@gmail.com",]
    // await( await client).query(userQuery, userData)
    
   
    console.log("the data update successful")}catch(err){console.error(err)}
}
main ()





