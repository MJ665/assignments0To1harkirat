interface User {
    name:string,
    age :number
}

function sumOfAge (user1:User, user2:User){
    return user1.age + user2.age
}


const age = sumOfAge({name:"tarao",age :22},{name:"harki",age :32})

console.log(age)