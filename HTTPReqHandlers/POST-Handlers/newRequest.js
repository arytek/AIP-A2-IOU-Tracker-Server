const mongoose = require('mongoose');
const Request = require('../../Utility/DB/Models/Request');

/**
 * Add request to the database.
 * @param {object} request  The request object containing valid request properties as defined in the Request Model.
 */
async function addRequestToDB(request) {
  let requestModel = new Request(request);
  let requestDoc = await requestModel.save();
  return requestDoc;
}

/**
 * Creates a new request using the submitted request parameters.
 * @param {object} request  The request object containing request properties.
 * @returns {promise}  A promise representing the eventual completion of the createNewRequest() function.
 */
function createNewRequest(requestData) {
  return new Promise(function (resolve, reject) {
    addRequestToDB(requestData)
      .then((requestDoc) => {
        const response = Object.assign({ success: true }, requestDoc);
        resolve(response);
      })
      .catch((error) => {
        reject({ success: false, message: error });
      });
  });
}

module.exports = {
  createNewRequest,
};
