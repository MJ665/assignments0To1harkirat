import {getClient} from "./utils"

async function main (){
const userQuery = `
create table  if not exists users (
    id serial primary key,
    username varchar(50) unique not null,
    email varchar(250) unique not null,
    password varchar (250) not null,
    created_at timestamp with time zone default CURRENT_TIMESTAMP
);
`
const client = await getClient()
await client . query (userQuery)
const todoQuery = `
create table  if not exists todos (
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