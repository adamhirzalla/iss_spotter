const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation, } = require('./iss');

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

// fetchISSFlyOverTimes({ latitude: '45.411', longitude: '-75.7097' }, (error, data)=>{
//   if (error) {
//     console.log('Something went wrong!', error);
//     return;
//   }
//   console.log('Here\'s the data:', data);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  console.log(passTimes);
  for (const passTime of passTimes) {
    const data = new Date(passTime.risetime * 1000).toString();
    console.log(`Next pass at ${data} for ${passTime.duration} seconds!`);
  }
});