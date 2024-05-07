import {getClient} from "./utils"

async function main (){
const userQuery = `
create table users if not exists  (
    id serial primary key,
    email varchar(250) unique not null,
    password varchar (250) not null
);
`
const client = await getClient()
await client . query (userQuery)
const todoQuery = `
create table todos if not exists (
    id serial primary key ,
    title varchar (250) unique not null,
    description varchar (250) ,
    userId integer references users(id),
    done boolean default false
);`
await client.query (todoQuery)
console.log("the creation of the table was successfull")
}
main ()