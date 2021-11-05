const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('http://ip-api.com/json/');
};
const fetchCoordsByIP = (body) => {
  const { query } = JSON.parse(body);
  return request(`http://ip-api.com/json/${query}`);
};
const fetchISSFlyOverTimes = (body) => {
  const { lat,lon } = JSON.parse(body);
  // const coords = { latitude: body.lat, longitude: body.lon };
  return request(`https://iss-pass.herokuapp.com/json/?lat=${lat}&lon=${lon}`);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body)=>{
      const { response } = JSON.parse(body);
      return response;
    });
};

const printPassTimes = (passTimes) => {
  passTimes.forEach(passTime => {
    const data = new Date(passTime.risetime * 1000).toString();
    console.log(`Next pass at ${data} for ${passTime.duration} seconds!`);
  });
};

module.exports = {
  nextISSTimesForMyLocation,
  printPassTimes,
};