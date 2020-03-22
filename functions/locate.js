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
          body: data.city
            ? `${data.city}, ${data.state} ${data.prov}`
            : `${event.queryStringParameters.lat}, ${event.queryStringParameters.long}`
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
