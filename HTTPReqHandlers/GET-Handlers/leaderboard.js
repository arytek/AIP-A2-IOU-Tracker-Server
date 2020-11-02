const mongoose = require('mongoose');
const UserStat = require('../../Utility/DB/Models/UserStat');

/**
 * Gets the top 10 UserStat documents with the most 'requestsFulfilled'.
 */
async function getMostFulfillingUsersFromDB() {
  const docs = await UserStat.find()
    .sort({ requestsFulfilled: -1 })
    .limit(10)
    .exec();
  return docs;
}

/**
 * Gets the UserStats of the top 10 users that have fulfilled the most requests.
 * @returns {promise}  A promise representing the eventual completion of the mostFulfillingUsers() function.
 */
function mostFulfillingUsers() {
  return new Promise(function (resolve, reject) {
    getMostFulfillingUsersFromDB()
      .then((userStatDocs) => {
        const response = Object.assign({ success: true }, userStatDocs);
        resolve(response);
      })
      .catch((error) => {
        reject({ success: false, message: error });
      });
  });
}

module.exports = {
  mostFulfillingUsers,
};
