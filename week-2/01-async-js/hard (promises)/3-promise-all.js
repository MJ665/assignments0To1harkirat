/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return promise=new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("we resolved this after 1 second")
        },1000)
    })

}

function waitTwoSecond() {
    return promise = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("we resolved this after 2 second")
        },2000)
    })

}

function waitThreeSecond() {
    return promise = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("we resolved this after 3 second")
        },3000)
    })

}

async function calculateTime() {
 let start = new Date()   
await Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]).then((values)=>{
    console.log(values)
})
let end = new Date ()
console.log("the time required in seconds is "+ ((end - start)/1000))
}
calculateTime()

// output
// [
//     'we resolved this after 1 second',
//     'we resolved this after 2 second',
//     'we resolved this after 3 second'
//   ]
//   the time required in seconds is 3.028