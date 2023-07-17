const express = require('express');
const router  = express.Router();
const app = express();
//importing home controller
const homeController = require('../controllers/home_controller');

console.log('i am here');
router.get('/',homeController.home);
// app.use('/create_project',require('./create_project'));
// app.use('/issue_tracker',require('./issue_tracker'));
// app.use('/details',require('./project_details'));


//exporting router
module.exports = router;