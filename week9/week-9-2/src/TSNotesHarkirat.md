## TSNotesHarkirat

### My Type Script Notes

```typescript


// creating a custom type

// type numArr = number[] | string[]
// // OR
// type numArr = (number | string)[]
// // OR
type numArr = Array<number> | Array<string>


// creating arr which is a variable using that custom type
const myFunc = (arr:numArr):number | string=>{
return arr[0]
}
let myArr1:number []=[1,2,3,4,5]
let myArr2:string []=["asd","234","ere"]
console.log( myFunc(myArr1))
console.log( myFunc(myArr2))

```


```typescript

// when i will hover on the myFunc(myArr2) and suppose i have to do .toLowerCase operation after the output comes
// it will give me a error that 
// toLowerCase is not a function for type 
// number | string


// the function should automatically identify that weather the return is string or number and should act accordingly

// the type script should identify 
// if input is string output is string 
// if input is number output is number 



// bad ugly solution


```