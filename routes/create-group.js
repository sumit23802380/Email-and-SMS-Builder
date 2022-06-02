const express =require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const createGroupControllers = require('../controllers/create-group');

router.get('/create-group',createGroupControllers.groupForm);
router.post('/create-group', createGroupControllers.addGroup);

exports.routes = router;
