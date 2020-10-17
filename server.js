const express = require('express');
const routeHandlers = require('./Utility/RouteHandlers');
const connectDB = require('./Utility/DB/Connection');

const app = express();
const port = process.env.PORT || 8080;

connectDB();

app.post('/signup', routeHandlers.handleSignup);
app.get('/requests', routeHandlers.handleRequests);
app.post('/newRequest', routeHandlers.handleNewRequest);
app.post('/newFavour', routeHandlers.handleNewFavour);

// Listen on the specified port for incoming requests to the server.
const server = app.listen(port, function () {});

// TODO: Sucessfully move route handlers to RouteHandlers.js. (maybe done, shouldtest)
// TODO: Implement express-cognito.
