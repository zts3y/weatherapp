const fetch = require("node-fetch").default;

const getCurrentWeather = async (lat, lon) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${process.env.WEATHER_KEY}&units=imperial`
  )
    .then(response => response.json())
    .then(data => data)
    .catch(e => {
      console.log(e);
      throw (new Error("Something went wrong"));
    });
}

const getExtendedForecast = async (lat, lon) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${process.env.WEATHER_KEY}&units=imperial`
  )
    .then(response => response.json())
    .then(data => data)
    .catch(e => {
      console.log(e);
      throw (new Error("Something went wrong"));
    });
}

exports.handler = async function (event, context, callback) {
  try {
    const [current, extended] = await Promise.all([
      getCurrentWeather(event.queryStringParameters.lat, event.queryStringParameters.lon),
      getExtendedForecast(event.queryStringParameters.lat, event.queryStringParameters.lon)]);

    callback(null, {
      statusCode: current.cod,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ current, extended })
    })
  } catch (e) {
    console.log(e);
    callback(new Error("Something went wrong"));
  }
};
