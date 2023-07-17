const express = require('express');
const router  = express.Router();
const app = express();
//importing home controller
const homeController = require('../controllers/home_controller');

app.get('/',homeController.home);
//exporting router
module.exports = router;