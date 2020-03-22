const fetch = require("node-fetch").default;

exports.handler = async function (event, context, callback) {
  try {
    const location = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${event.queryStringParameters.lat}&lon=${event.queryStringParameters.lon}&APPID=${process.env.WEATHER_KEY}&units=imperial`
    )
      .then(response => response.json())
      .then(data => {
        
        return ({
          statusCode: data.cod,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
      }).catch(e => {
        console.log(e);
        callback(new Error("Something went wrong"));
      });
      callback(null, location)
  } catch (e) {
    console.log(e);
    callback(new Error("Something went wrong"));
  }
};
