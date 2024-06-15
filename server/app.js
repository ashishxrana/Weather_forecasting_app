const express = require("express");
const geoCode = require("./GeoCode");
const weatherCode = require("./weatherCode");

const router = new express.Router();

router.post("/search", async (req, res) => {
  try {
    if (!req.body.address) {
      throw new Error("address not found!");
    } else {
      geoCode(req.body.address, (error, data) => {
        if (error) {
          return console.log(error);
        }
        const location = data.place;
        weatherCode(data.latitude, data.longitude, (error, data) => {
          if (error) {
            return console.log(error);
          }
          res
            .status(200)
            .send(
              "Location : " +
                location + ". " +
                "It is currently " +
                data +
                " degree out."
            );
        });
      });
    }
  } catch (error) {
    res.status(400).send();
  }
});

module.exports = router;

// const url =
//   "http://api.weatherstack.com/current?access_key=4abf57afc7fb4efc5ba2e95d82690dbb&query=25.5941,85.1376";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather API!");
//     console.log(error);
//   } else if (response.body.error) {
//     console.log("Unable to find the location!");
//   } else {
//     const currentTemp = response.body.current.temperature;
//     console.log(
//       response.body.current.weather_descriptions +
//         ". It is currently " +
//         currentTemp +
//         " degree out."
//     );
//   }
// });

// const url2 =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/wht.json?access_token=pk.eyJ1IjoiYWRpdHlhNjA2MCIsImEiOiJja3kxb3M5Y3owZDJqMnVtcGh6N3l5aWcwIn0.IQuQjeZIidzjk4IeFWjaXw&limit=1";

// request({ url: url2, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to the API!");
//   } else if (response.body.message) {
//     console.log(response.body.message);
//   } else if (response.body.features.length === 0){
//       console.log("Place not found!");
//   }  else {
//     console.log(
//       "latitude: " +
//         response.body.features[0].center[1] +
//         ". Longitude: " +
//         response.body.features[0].center[0]
//     );
//   }
// });
