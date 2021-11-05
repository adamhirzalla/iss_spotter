const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('174.116.122.160', (error, data)=>{
//   if (error) {
//     console.log('Something went wrong!', error);
//     return;
//   }
//   console.log('Here\'s the data:', data);
// });