const fetch = require("node-fetch").default;

const getWeatherURL = (lat, lon, loc) => {
  if(loc && loc.length === 5 && !isNaN(loc)){ //loc is a zipcode
    return `https://api.openweathermap.org/data/2.5/weather?zip=${loc},US&APPID=${process.env.WEATHER_KEY}&units=imperial`
  } else { //Either a city was passed or lat/long
     return `https://api.openweathermap.org/data/2.5/weather?${loc? `q=${loc} US` : `lat=${lat}&lon=${lon}`}&APPID=${process.env.WEATHER_KEY}&units=imperial`
  }
}

const getForecastURL = (lat, lon, loc) => {
  if(loc && loc.length === 5 && !isNaN(loc)){ //loc is a zipcode
    return `https://api.openweathermap.org/data/2.5/forecast?zip=${loc},US&APPID=${process.env.WEATHER_KEY}&units=imperial`
  } else { //Either a city was passed or lat/long
     return `https://api.openweathermap.org/data/2.5/forecast?${loc? `q=${loc} US` : `lat=${lat}&lon=${lon}`}&APPID=${process.env.WEATHER_KEY}&units=imperial`
  }
}

const getCurrentWeather = async (lat, lon, loc) => {
  return await fetch(
    getWeatherURL(lat, lon, loc)
  )
    .then(response => response.json())
    .then(data => data)
    .catch(e => {
      console.log(e);
      throw (new Error("Something went wrong"));
    });
}

const getExtendedForecast = async (lat, lon, loc) => {
  return await fetch(
    getForecastURL(lat,lon,loc)
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
      getCurrentWeather(event.queryStringParameters.lat, event.queryStringParameters.lon, event.queryStringParameters.loc),
      getExtendedForecast(event.queryStringParameters.lat, event.queryStringParameters.lon, event.queryStringParameters.loc)]);

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
