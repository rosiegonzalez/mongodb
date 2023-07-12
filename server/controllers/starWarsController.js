const models = require('../models/starWarsModels');

const starWarsController = {};

starWarsController.getCharacters = (req, res, next) => {
  // write code here
  models.Person.find({})
    .then((result) => {
      console.log(result);
      res.locals = result;
    })
    .catch((err) => console.log(err.message));
  next();
};

starWarsController.getSpecies = (req, res, next) => {

  models.Species.find({})
    .then((result) => {
      console.log(result);
      res.locals = result;
    })
    .catch((err) => console.log(err.message));
  // write code here

  next();
};

starWarsController.getHomeworld = (req, res, next) => {

  models.Homeworld.find({})
    .then((result) => {
      console.log(result);
      res.locals = result;
    })
    .catch((err) => console.log(err.message));
  // write code here

  next();
};

starWarsController.getFilm = (req, res, next) => {

  models.Film.find({})
    .then((result) => {
      console.log(result);
      res.locals = result;
    })
    .catch((err) => console.log(err.message));
  // write code here

  next();
};

starWarsController.addCharacter = (req, res, next) => {
  // write code here

  next();
};

module.exports = starWarsController;
