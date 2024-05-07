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
            const userQuery = `insert into users (username , email, password) values ($1, $2 , $3) returning id`;
            const userData = ["hariOm", "hariom@gmail.com", "hariom"];
            const user = yield (yield client).query(userQuery, userData);
            console.log(user);
            const todoQuery = `insert into todos (title , description,userId) values ($1,$2,$3) returning id;`;
            const todoData = ["hariOm's title", "hariOm's descriptiion", user.rows[0].id];
            const todo = yield (yield client).query(todoQuery, todoData);
            console.log("the data insertion successful");
        }
        catch (err) {
            console.error(err);
        }
    });
}
main();
/*
Step 9 - Creating a simple Node.js app
Initialise an empty typescript project
npm init -y
npx tsc --init
Copy
Change the rootDir and outDir in tsconfig.json
"rootDir": "./src",
"outDir": "./dist",
Copy
Install the pg library and it’s types (because we’re using TS)
npm install pg
npm install @types/pg
Copy
Create a simple Node.js app that lets you put data
Create a function that let’s you insert data into a table. Make it async, make sure client.connect resolves before u do the insert
Answer
import { Client } from 'pg';

// Async function to insert data into a table
async function insertData() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
  });

  try {
    await client.connect(); // Ensure client connection is established
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
    const res = await client.query(insertQuery);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData();
Copy
💡
This is an insecure way to store data in your tables.
When you expose this functionality eventually via HTTP, someone can do an SQL INJECTION to get access to your data/delete your data.
More secure way to store data.
Update the code so you don’t put user provided fields in the SQL string
What are user provided strings?
In your final app, this insert statement will be done when a user signs up on your app.
Email, username, password are all user provided strings
What is the SQL string ?
const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
Copy
Hint
const insertQuery = 'INSERT INTO example_table(column1, column2) VALUES($1, $2)';
const res = await client.query(insertQuery, [column1Value, column2Value]);
Copy
 
Solution
import { Client } from 'pg';

// Async function to insert data into a table
async function insertData(username: string, email: string, password: string) {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
  });

  try {
    await client.connect(); // Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
insertData('username5', 'user5@example.com', 'user_password').catch(console.error);
Copy
Query data
Write a function getUser that lets you fetch data from the database given a email as input.
import { Client } from 'pg';

// Async function to fetch user data from the database given an email
async function getUser(email: string) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });
    

  try {
    await client.connect(); // Ensure client connection is established
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);
    
    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log('No user found with the given email.');
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
getUser('user5@example.com').catch(console.error);
*/ 
