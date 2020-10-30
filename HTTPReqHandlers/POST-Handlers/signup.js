const mongoose = require('mongoose');
const User = require('../../Utility/DB/Models/User');

/**
 * Add user to the database.
 * @param {object} user  The user object containing user properties.
 */
async function addUserToDB(user) {
  let userModel = new User(user);
  await userModel.save();
  return userModel;
}

/**
 * Signup to the platform using the given username and password.
 * @param {string} auth_uuid  The client-side generated AWS Cognito authentication UUID of the user.
 * @param {string} username  The specified username of the user.
 * @param {string} name  The specified name of the user.
 * @param {string} email  The specified email of the user.
 * @returns {promise}  A promise representing the eventual completion of the signupUser() function.
 */
function signupUser(data) {
  return new Promise(function (resolve, reject) {
    let user = {};
    user.auth_uuid = data.auth_uuid;
    user.username = data.username;
    user.name = data.name;
    user.email = data.email;

    addUserToDB(user).then((userModel) => {
      resolve(userModel);
    });
  });
}

module.exports = {
  signupUser,
};
