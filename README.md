# Palmeto Weather Exercise 

## Dependencies
- Node.js installed (created using 12.16.1)
- API key set for [OpenWeather API](https://openweathermap.org/api)
    - This key should be saved in an environment variable via `export WEATHER_KEY=<YOUR_API_KEY>` or `WEATHER_KEY=<YOUR_API_KEY>` if on a Unix-type environment

## Running locally
1. Ensure that the environment variable for the OpenWeather API has been set per above.
2. Run `npm install`
3. In one console window/tab execute `npm start` to start the React project
4. In a separate console window/tab execute `npm run start:lambda` to spin up the APIs

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `npm run start:lambda`

Launches process to serve the serverless function inside `./functions` at `localhost:9000`. 

## `npm run build:lambda`

Builds the serverless functions inside `./functions` which will minify and optimize those files and output them to `./lambda` which is used by Netlify for serving. 


