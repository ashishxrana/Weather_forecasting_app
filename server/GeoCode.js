const request = require("request");
const geoCode = (name, callBack) => {
  const nameToString = name.toString();

  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    nameToString +
    ".json?access_token=pk.eyJ1IjoiYWRpdHlhNjA2MCIsImEiOiJja3kxb3M5Y3owZDJqMnVtcGh6N3l5aWcwIn0.IQuQjeZIidzjk4IeFWjaXw&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callBack("Unable to connect to API!", undefined);
    } else if (response.body.features.length === 0) {
      callBack(`Can't find the location`, undefined);
    } else {
      callBack(undefined, {
        place: response.body.features[0].place_name,
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
      });
    }
  });
};
module.exports = geoCode;
