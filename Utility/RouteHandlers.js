const signup = require('./../HTTPReqHandlers/POST-Handlers/signup');
const requests = require('./../HTTPReqHandlers/GET-Handlers/requests');
const newRequest = require('./../HTTPReqHandlers/POST-Handlers/newRequest');
const newFavour = require('./../HTTPReqHandlers/POST-Handlers/newFavour');

/**
 * Handles '/signup' POST requests.
 * Returns
 * @param {object} req  The requests object provided by Express. See Express doc.
 * @param {object} res  The results object provided by Express. See Express doc.
 */
function handleSignup(req, res) {
  const auth_uuid = req.query.auth_uuid;
  const username = req.query.username;
  const name = req.query.name;
  const email = req.query.email;
  signup
    .signupUser(auth_uuid, username, name, email)
    .then(function (data) {
      res.send(data);
    })
    .catch(function (data) {
      res.send(data);
    });
}

/**
 * Handles '/requests' GET requests.
 * Returns the 10 newest currently available requests or specific requests by keyword
 * if the query's 'keywords' params is defined.
 * @param {object} req  The requests object provided by Express. See Express doc.
 * @param {object} res  The results object provided by Express. See Express doc.
 */
function handleRequests(req, res) {
  const keywords = req.query.keywords;
  requests
    .FetchRequests(keywords)
    .then(function (data) {
      res.send(data);
    })
    .catch(function (data) {
      res.send(data);
    });
}

/**
 * Handles '/newRequest' POST requests.
 * Publishes a new 'request' to the database.
 * @param {object} req  The requests object provided by Express. See Express doc.
 * @param {object} res  The results object provided by Express. See Express doc.
 */
function handleNewRequest(req, res) {
  const requester = req.query.requester;
  const description = req.query.description;
  const notes = req.query.notes;
  const rewards = req.query.rewards;

  newRequest
    .FetchRequests(requester, description, notes, rewards)
    .then(function (data) {
      res.send(data);
    })
    .catch(function (data) {
      res.send(data);
    });
}

/**
 * Handles '/newFavour' POST requests.
 * Publishes a new 'favour' to the database.
 * @param {object} req  The requests object provided by Express. See Express doc.
 * @param {object} res  The results object provided by Express. See Express doc.
 */
function handleNewFavour(req, res) {
  const creator_id = req.query.creator_id;
  const description = req.query.description;
  const notes = req.query.notes;
  const rewards = req.query.rewards;

  newFavour
    .FetchRequests(creator_id, description, notes, rewards)
    .then(function (data) {
      res.send(data);
    })
    .catch(function (data) {
      res.send(data);
    });
}

module.exports = {
  handleSignup,
  handleRequests,
  handleNewRequest,
  handleNewFavour,
};
