/**
 * Signup to the platform using the given username and password.
 * @param {string} username  Desired username of the user.
 * @param {string} password  Desired password of the user.
 * @returns {promise}  A promise representing the eventual completion of the signupUser() function.
 */
function signupUser(username, password) {
  return new Promise(function (resolve, reject) {
    resolve({
      success: true,
      message: `testing - signupUser() invoked - Username: ${username}, Password: ${password}`,
    });
  });
}

module.exports = {
  signupUser,
};
