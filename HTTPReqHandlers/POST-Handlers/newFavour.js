const mongoose = require('mongoose');
const Favour = require('../../Utility/DB/Models/Favour');

/**
 * Add favour to the database.
 * @param {object} favour  The favour object containing favour properties.
 */
async function addFavourToDB(favour) {
  let favourModel = new Favour(favour);
  await favourModel.save();
  return favourModel;
}

/**
 * Handles creation of favours in the system.
 * @param {ObjectId} creator_id  The authentication UUID of the user who created this favour.
 * @param {ObjectId} user_id  The id of the user document. The user being owed/owing this favour.
 * @param {string} notes  gdfgdfgdfgdfgdf
 * @param {string} favourType  gdfgdfgdfgdfgdf
 * @returns {promise}  A promise representing the eventual completion of the createNewFavour() function.
 */
function createNewFavour(creator_id, user_id, notes, favourType) {
  return new Promise(function (resolve, reject) {
    let favour = {};
    favour.creator_id = creator_id;
    favour.user_id = user_id;
    favour.notes = notes;
    favour.favourType = favourType;

    addFavourToDB(favour).then((favourModel) => {
      resolve(favourModel);
    });
  });
}

module.exports = {
  createNewFavour,
};
