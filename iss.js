const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 * https://api.ipify.org?format=json
 * ip value inside 'ip' key
 */

const fetchMyIP = function(callback) {
  
  request('http://ip-api.com/json/', (error, response, body)=>{
    if (error) return callback(error, null);
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      return callback(Error(msg), null);
    }
    callback(null, JSON.parse(body).query);
  });
  
};

const fetchCoordsByIP = (ip, callback) => {
  request(`http://ip-api.com/json/${ip}`, (error, response, body)=>{
    if (error) return callback(error, null);
    body = JSON.parse(body);
    if (body.status !== 'success') {
      return callback(body, null);
    }
    callback(null, { latitude: body.lat, longitude: body.lon });
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};