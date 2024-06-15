const request = require("request");

const weatherCode = (latitude, longitude, callBack) => {
  const url =
    "http://api.weatherstack.com/current?access_key=4abf57afc7fb4efc5ba2e95d82690dbb&query=" +
    latitude +
    "," +
    longitude;
  request({url: url, json: true}, (error, response) => {
      if(error) {
          callBack('unable to connect to weather API', undefined)
      } else if (response.body.error){
          callBack('Cant find the location', undefined)
      }
      else {
          callBack(undefined, response.body.current.temperature)
      }
  });
};
module.exports = weatherCode;

