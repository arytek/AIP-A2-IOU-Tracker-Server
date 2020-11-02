const mongoose = require('mongoose');
const User = require('../../Utility/DB/Models/User');

/**
 * Add user to the database.
 * @param {object} user  The user object containing user properties.
 */
async function addUserToDB(user) {
  let userModel = new User(user);
  let userDoc = await userModel.save();
  return userDoc;
}

/**
 * Signup to the platform using the given username and password.
 * @param {string} auth_uuid  The client-side generated AWS Cognito authentication UUID of the user.
 * @param {string} username  The specified username of the user.
 * @param {string} name  The specified name of the user.
 * @param {string} email  The specified email of the user.
 * @returns {promise}  A promise representing the eventual completion of the signupUser() function.
 */
function signupUser(userData) {
  return new Promise(function (resolve, reject) {
    let user = {};
    user.auth_uuid = userData.auth_uuid;
    user.username = userData.username;
    user.name = userData.name;
    user.email = userData.email;

    addUserToDB(user)
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
  signupUser,
};
