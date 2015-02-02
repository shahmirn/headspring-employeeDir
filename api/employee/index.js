'use strict';

var express = require('express');
var controller = require('./employee.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.post('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;