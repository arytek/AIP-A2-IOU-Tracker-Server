const mongoose = require('mongoose');
const Request = require('../../Utility/DB/Models/Request');

/**
 * Add request to the database.
 * @param {object} request  The request object containing request properties.
 */
async function addRequestToDB(request) {
  let requestModel = new Request(request);
  await requestModel.save();
  return requestModel;
}

/**
 * Handles creation of favour requests in the system.
 * @param {object} request  The request object containing request properties.
 * @returns {promise}  A promise representing the eventual completion of the createNewRequest() function.
 */
function createNewRequest(request) {
  return new Promise(function (resolve, reject) {
    addRequestToDB(request).then((requestModel) => {
      resolve(requestModel);
    });
  });
}

module.exports = {
  createNewRequest,
};
