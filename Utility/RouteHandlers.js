const signup = require('./../HTTPReqHandlers/POST-Handlers/signup');
const requests = require('./../HTTPReqHandlers/GET-Handlers/requests');
const newRequest = require('./../HTTPReqHandlers/POST-Handlers/newRequest');
const newFavour = require('./../HTTPReqHandlers/POST-Handlers/newFavour');
const leaderboard = require('../HTTPReqHandlers/GET-Handlers/leaderboard');
const userData = require('../HTTPReqHandlers/POST-Handlers/userData');

//  =========================== Authenticated Routes ===========================

/**
 * Handles '/newRequest' POST requests.
 * Publishes a new 'request' to the database.
 * @param {object} req  The requests object provided by Express. See Express doc.
 * @param {object} res  The results object provided by Express. See Express doc.
 */
function handleNewRequest(req, res) {
  newRequest
    .createNewRequest(res.locals.user, req.body)
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
    .createNewFavour(creator_id, description, notes, rewards)
    .then(function (data) {
      res.send(data);
    })
    .catch(function (data) {
      res.send(data);
    });
}

/**
 * Handles '/userData' POST requests.
 * Gets the user's data.
 * @param {object} req  The requests object provided by Express. See Express doc.
 * @param {object} res  The results object provided by Express. See Express doc.
 */
function handleUserData(req, res) {
  userData
    .fetchUserData(res.locals.user.username)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (data) {
      res.send(data);
    });
}

//  =========================== Unauthenticated Routes ===========================

/**
 * Handles '/signup' POST requests.
 * Returns
 * @param {object} req  The requests object provided by Express. See Express doc.
 * @param {object} res  The results object provided by Express. See Express doc.
 */
function handleSignup(req, res) {
  signup
    .signupUser(req.body)
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
    .fetchRequests(keywords)
    .then(function (data) {
      res.send(data);
    })
    .catch(function (data) {
      res.send(data);
    });
}

/**
 * Handles '/leaderboard' GET requests.
 * Returns the top 10 users that have fulfilled the most requests and favours.
 * @param {object} req  The requests object provided by Express. See Express doc.
 * @param {object} res  The results object provided by Express. See Express doc.
 */
function handleLeaderboard(req, res) {
  const creator_id = req.query.creator_id;
  const description = req.query.description;
  const notes = req.query.notes;
  const rewards = req.query.rewards;

  leaderboard
    .mostFulfillingUsers()
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
  handleUserData,
  handleNewRequest,
  handleNewFavour,
  handleLeaderboard,
};
