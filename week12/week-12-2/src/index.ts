//     the way the function looks very ugly when the number of arguments grow 


// example

// interface User {
//     id:string;
//     name:string;
//     age :number;
//     email:string;
//     password:string
// }

// interface updateProps{
    
    //     name:string;
    //     age :number;
    //     email:string;
    //     password:string
// }

// function updateUser(updatedProps : updateProps){


// }









// so what we cna do is that we can use generics and pick api of the ts

// Pick helps to take some properties from an interface or a type and then use it to create other type so that dry principal wound not be violated
// interface User{
//     id:string ;
//     name :string ;
//     age : number;
//     password:string ;
//     email:string ;
// }
//  type updatedPorps = Pick <User , 'name'|'age'|'email'>
// function updateUser (updatedPorps :updatedPorps){
// // db call
// }








// partial makes all properties of a type optional creating a type whith the same properties but each marked as optional

// interface User{
//     id:string ;
//     name :string 
//     age : number;
//     password:string ;
//     email:string ;
// }
//  type updatedPorps = Pick <User , 'name'|'age'|'email'>
//  type updatedPorpsOptional = Partial <updatedPorps >
// function updateUser (updatedPorps :updatedPorpsOptional){
// // db call
// }









// readonly

const a = [1,2,3]
a[0]=23 // we get no error

// const userName:string = "harkirat"
// userName [2]="e" // we get a n error


// if we change an value inside of a or some object then we dont get an error
//  we are not re assisgning the whold thing we are only re assigning small part of the bigger thing


// type User = {
//     readonly name :string,
//     readonly age :number
// }
// const user:User = {
//     name:"jhon",
//     age :21
// }
// user.name= "new Jhon" // hence we are now getting the error of the readonly




// type User = {
//      name :string,
//      age :number
// }
// const user:Readonly<User> = {
//     name:"jhon",
//     age :21
// }
// user.name= "new Jhon" // hence we are now getting the error of the readonly






















// Records and Maps

// Ugly syntax

// type UserAge = { 
//     [key:string]:number
// }
// const users:UserAge= {
//     "ras@qd1":21,  
//     "ras@qd2":22
    
// }


// record is a method of the typescript so the javascrips does not understand it
// type Users = Record <string, {age :number; name :string}>
// const users:Users = { 
//     "ras@qd1":{age :21, name :"harkirat"},
//     "ras@qd2":{age :22, name :"harkirat2"},

// }



// map is the concept of the javascript and it is like we use in c++

// type User = {
//     name :string
//     age : number 
//     email:string
// }
// const users = new Map<string , User> ()
// users.set(    "ras@qd1",{age :21, name :"harkirat", email :"newEmail@email.com"
// })
















// type EventType = 'click'|'scroll'|'mousemove'
// type ExcludeEvent = Exclude<EventType , "scroll">   // ' click ' | ' mousemove '
// const handleEvent  = (event :ExcludeEvent )=>{
//     console.log(`handeling event : ${event }`)
// }
// handleEvent ("click")





































// 6] Type Inferences In Zod
// Type inference in Zod is a powerful feature that allows TypeScript to automatically determine the type of data validated by a Zod schema. This capability is particularly useful in applications where runtime validation coincides with compile-time type safety, ensuring that your code not only runs correctly but is also correctly typed according to your Zod schemas.
// How Type Inference Works in Zod
// Zod schemas define the shape and constraints of your data at runtime. When you use Zod with TypeScript, you can leverage Zod's type inference to automatically generate TypeScript types based on your Zod schemas. This means you don't have to manually define TypeScript interfaces or types that replicate your Zod schema definitions, reducing redundancy and potential for error.
// Example: Type Inference with Zod in an Express App
// Consider an Express application where you want to validate and update a user's profile information. You define a Zod schema for the profile update request body:











// In this example, `userProfileSchema.safeParse(req.body)` validates the request body against the `userProfileSchema`. The `safeParse` method returns an object that includes a `success` boolean and, on success, a `data` property containing the validated data.

// ### Assigning a Type to `updateBody`

// Thanks to Zod's type inference, the type of `updateBody` is automatically inferred to be:

// {
//     name: string;
//     email: string;
//     age?: number;
//   }






//   This inferred type is derived directly from the `userProfileSchema` definition. If you try to access a property on `updateBody` that isn't defined in the schema, TypeScript will raise a compile-time error, providing an additional layer of type safety.

//   ### Benefits of Type Inference in Zod
  
//   1. **Reduced Boilerplate**: You don't need to manually define TypeScript types that mirror your Zod schemas.
//   2. **Type Safety**: Ensures that your data conforms to the specified schema both at runtime (through validation) and at compile-time (through type checking).
//   3. **Developer Productivity**: Type inference, combined with Zod's expressive API for defining schemas, makes it easier to write, read, and maintain your validation logic and related type definitions.
  
//   > Type inference in Zod bridges the gap between runtime validation and compile-time type safety in TypeScript applications. By automatically generating TypeScript types from Zod schemas, Zod helps ensure that your data validation logic is both correct and type-safe, enhancing the reliability and maintainability of your code.
//   >