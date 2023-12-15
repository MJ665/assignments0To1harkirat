console.log("we are creating the clock in this code !!!")
// format
// - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
// setInterval(function (){
//     console.log("we are writing the date")
//     const date=new Date()
//     console.log(date.toTimeString())

//     console.log(date.getHours() + " : " + date.getMinutes()+ " : : "+ date.getSeconds() )
//       // Custom formatting
//       const hours = date.getHours() > 11 ? date.getHours() - 12 : date.getHours();
//       const ampm = date.getHours() >= 12 ? "PM" : "AM";
  
//       console.log(`${hours}:${date.getMinutes()}:${date.getSeconds()} ${ampm}`);
//   }, 1000);



setInterval(function () {
    const date = new Date();
    
    // Format 1: HH:MM:SS
    const formattedTime = `${padZero(date.getHours())}:${padZero(date.getMinutes())}:${padZero(date.getSeconds())}`;
    
    // Format 2: HH:MM:SS AM/PM
    const ampmTime = `${padZero(get12HourFormat(date.getHours()))}:${padZero(date.getMinutes())}:${padZero(date.getSeconds())} ${getAMPM(date.getHours(), date.getMinutes(), date.getSeconds())}`;

    console.log(`Format 1: ${formattedTime}`);
    console.log(`Format 2: ${ampmTime}`);
}, 1000);

// Function to pad zero for single-digit numbers
function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

// Function to get 12-hour format
function get12HourFormat(hours) {
    return hours >= 12 ? hours - 12 : hours;
}

// Function to get AM/PM
function getAMPM(hours, minutes, seconds) {
    return hours >= 12 || (hours === 12 && (minutes > 0 || seconds > 0)) ? "PM" : "AM";
}