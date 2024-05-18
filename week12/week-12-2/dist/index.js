"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "tarao", age: 22 }, { name: "harki", age: 32 });
console.log(age);
