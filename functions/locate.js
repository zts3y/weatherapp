const fetch = require("node-fetch").default;

exports.handler = async function (event, context, callback) {
  try {
    const location = await fetch(
      `https://geocode.xyz/${event.queryStringParameters.lat},${event.queryStringParameters.long}?geoit=json`
    )
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        return ({
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({loc: data.city
            ? `${data.city}, ${data.state}`
            : `${event.queryStringParameters.lat}, ${event.queryStringParameters.long}`,
            lat: parseFloat(event.queryStringParameters.lat),
            long: parseFloat(event.queryStringParameters.long)
          })
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
