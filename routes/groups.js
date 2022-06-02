const express = require('express');
const router  =express.Router();

const groupController = require('../controllers/groups')
router.get('/' ,groupController.getIndex)

router.get('/:groupId',groupController.getGroup)

exports.routes =router;
