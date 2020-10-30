const mongoose = require('mongoose');
const UserStat = require('../../Utility/DB/Models/UserStat');

/**
 * Add request to the database.
 * @param {object} request  The user object containing user properties.
 */
async function getUserStatsFromDB(request) {
  // let userModel = new User(user);
  // await userModel.save();
  // return userModel;
}

/**
 *
 * @param {string} keywords  Keywords describing the request to search for.
 * @returns {promise}  A promise representing the eventual completion of the FetchRequests() function.
 */
function mostFulfillingUsers(keywords) {
  return new Promise(function (resolve, reject) {
    if (keywords) {
    }

    addUserToDB(user).then((userModel) => {
      resolve(userModel);
    });
  });
}

module.exports = {
  mostFulfillingUsers,
};
