/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

const { rejects } = require("assert");

function waitOneSecond() {
    return promise = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("we are resolving it after 1 second")
        },1000)
    })

}

function waitTwoSecond() {
return promise  = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("we are resolving it after 2 second")
    },2000)
})
}

function waitThreeSecond() {
    return promise  = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("we are resolving it after 3 second")
        },3000)
    })

}

async function calculateTimeWithConsoleTime() {
    console.log("we are starting the console.time")
    console.time ()
    await waitOneSecond() 
    await waitTwoSecond()
    await waitThreeSecond()
    console.timeEnd()
    
}
async function calculateTimeByDateModule(){
    let start  = new Date ()
    await waitOneSecond()
    await waitTwoSecond()
    await waitThreeSecond()
    let end = new Date ()
    console.log("we are printing the time withe date module")
    console.log("time took in second is : " + ((end - start)/1000))


}
calculateTimeWithConsoleTime()
calculateTimeByDateModule()

