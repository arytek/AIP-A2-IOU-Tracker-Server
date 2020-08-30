const express = require("express");
const signup = require("./HTTPReqHandlers/POST-Handlers/signup");

const app = express();

/**
 * Handles 'Signup' POST requests.
 * @param {object} req  The requests object provided by Express. See Express doc.
 * @param {object} res  The results object provided by Express. See Express doc.
 */
function handleSignup(req, res) {
  const username = req.query.username;
  const password = req.query.password;
  signup
    .signupUser(username, password)
    .then(function (data) {
      res.send(data);
    })
    .catch(function (data) {
      res.send(data);
    });
}

app.post("/signup", handleSignup);

// Listen on port 8080 for incoming requests to the server.
const server = app.listen(8080, function () {});
