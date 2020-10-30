const express = require('express');
const CognitoExpress = require('cognito-express');
const cors = require('cors');
const routeHandlers = require('./Utility/RouteHandlers');
const connectDB = require('./Utility/DB/Connection');

const app = express();
const authenticatedRoute = express.Router(); // Use separate router for authenticated routes.
const port = process.env.PORT || 4000;

// Initialisation code.
connectDB();
app.use(cors());
app.use(express.json());
app.use(authenticatedRoute); //TODO: Perhaps remove '/api' first parameter.

const cognitoExpress = new CognitoExpress({
  region: 'ap-southeast-2',
  cognitoUserPoolId: 'ap-southeast-2_xvLxsFxJZ',
  tokenUse: 'access', //Possible Values: access | id
  tokenExpiration: 3600000, //Up to default expiration of 1 hour (3600000 ms)
});

//Our middleware that authenticates all APIs under our 'authenticatedRoute' Router
authenticatedRoute.use(function (req, res, next) {
  //Pass in the access token in header under key accessToken
  let accessTokenFromClient = req.headers.accesstoken;

  //Fail if token not present in header.
  if (!accessTokenFromClient)
    return res.status(401).json('Access Token missing from header');

  cognitoExpress.validate(accessTokenFromClient, function (err, response) {
    //If API is not authenticated, Return 401 with error message.
    if (err) return res.status(401).json(err);

    //Else API has been authenticated. Proceed.
    res.locals.user = response;
    next();
  });
});

//Define your routes that need authentication check - example:
authenticatedRoute.get('/myfirstapi', function (req, res, next) {
  res.send(`Hi ${res.locals.user.username}, your API call is authenticated!`);
});

// Authenticated routes:
authenticatedRoute.post('/api/newRequest', routeHandlers.handleNewRequest);
authenticatedRoute.post('/api/newFavour', routeHandlers.handleNewFavour);
authenticatedRoute.post('/api/userData', routeHandlers.handleUserData);

// Unauthenticated routes:
app.post('/api/signup', routeHandlers.handleSignup);
app.get('/api/requests', routeHandlers.handleRequests);
app.get('/api/leaderboard', routeHandlers.handleLeaderboard);

// Listen on the specified port for incoming requests to the server.
const server = app.listen(port, function () {});

// TODO: Implement express-cognito.
