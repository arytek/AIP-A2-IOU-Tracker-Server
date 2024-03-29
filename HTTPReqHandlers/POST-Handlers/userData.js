const mongoose = require('mongoose');
const escapeStringRegexp = require('escape-string-regexp');
const User = require('../../Utility/DB/Models/User');

/**
 * Gets the user's data from the 'users' collection in the database.
 * @param {object} auth_uuid  Authentication UUID of the user.
 */
async function getUserDataFromDB(auth_uuid) {
  if (auth_uuid) {
    const userDoc = await User.find({
      auth_uuid: new RegExp(escapeStringRegexp(auth_uuid), 'i'),
    })
      .sort({ _id: -1 })
      .limit(1)
      .exec();
    return userDoc;
  } else {
    throw Error('Parameter auth_uuid was not specified.');
  }
}

/**
 * Fetches the user's data from the 'users' collection in the database.
 * @param {string} auth_uuid  Authentication UUID of the user.
 * @returns {promise}  A promise representing the eventual completion of the fetchUserData() function.
 */
function fetchUserData(auth_uuid) {
  return new Promise(function (resolve, reject) {
    getUserDataFromDB(auth_uuid)
      .then((userDoc) => {
        const response = Object.assign({ success: true }, userDoc);
        resolve(response);
      })
      .catch((error) => {
        reject({ success: false, message: error });
      });
  });
}

module.exports = {
  fetchUserData,
};
