const mongoose = require('mongoose');
const escapeStringRegexp = require('escape-string-regexp');
const Request = require('../../Utility/DB/Models/Request');

/**
 * Gets the 10 newest requests from the database.
 * @param {object} keywords  Keywords describing the request to search for.
 */
async function getRequestsFromDB(keywords) {
  if (keywords) {
    const docs = await Request.find({
      description: new RegExp(escapeStringRegexp(keywords), 'i'),
    })
      .sort({ _id: -1 })
      .limit(10)
      .exec();
    return docs;
  } else {
    const docs = await Request.find().sort({ _id: -1 }).limit(10).exec();
    return docs;
  }
}

/**
 * Fetches the given request, based on keywords supplied by the user.
 * @param {string} keywords  Keywords describing the request to search for.
 * @returns {promise}  A promise representing the eventual completion of the FetchRequests() function.
 */
function fetchRequests(keywords) {
  return new Promise(function (resolve, reject) {
    getRequestsFromDB(keywords)
      .then((requestDocs) => {
        const response = Object.assign({ success: true }, requestDocs);
        resolve(response);
      })
      .catch((error) => {
        reject({ success: false, message: error });
      });
  });
}

module.exports = {
  fetchRequests,
};
