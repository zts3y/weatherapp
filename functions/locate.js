const fetch = require("node-fetch");

exports.handler = async function(event, context, callback) {
  try {
    await fetch(
      `https://geocode.xyz/${event.queryStringParameters.lat},${event.queryStringParameters.long}?geoit=json`,
      {
        mode: "cors"
      }
    )
      .then(response => response.json())
      .then(data => {
        callback(null, {
          statusCode: 200,
          body: data.city
            ? `${data.city}, ${data.state} ${data.prov}`
            : `${event.queryStringParameters.lat}, ${event.queryStringParameters.long}`
        }).catch(e => {
          console.error(e);
          callback(new Error("Something went wrong"));
        });
      });
  } catch (e) {
    console.error(e);
    callback(new Error("Something went wrong"));
  }
};
