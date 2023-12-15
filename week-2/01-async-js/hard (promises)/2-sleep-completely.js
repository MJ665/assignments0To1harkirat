/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    console.log("we are making the thread busy")
    for (let i=0;i<=5000000000;i++){
        if (i == 5000000000){
            console.log("printing the  i : "+ i )
        }
    }

}
async function main (){
await sleep()
console.log("finally the JS thread is FREE !!!!!!")

}
main ()