/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const { resolve } = require("path");

function patchZero(n){
    return parseInt(n+"000")
}
function wait(n) {
    return promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("resolving after "+n+" seconds")
            console.log("we are resolving after " + n + " seconds")
        }, patchZero(n));
    })
}

async function main (){

    let status =await wait(5)
    console.log(status)
}
main ()