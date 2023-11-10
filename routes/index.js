const routes = require('express').Router();
const myController = require('../controllers');

routes.get('/', myController.awasomeFunction );
routes.get('/awasome', myController.AnotherPerson );

module.exports = routes;