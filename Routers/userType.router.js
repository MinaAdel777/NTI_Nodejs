const express = require('express');
const router = express.Router();
const userTypeController = require('../Controllers/userType.controller');
const auth = require('../utili/auth');

router.get('/',auth.authMW,userTypeController.getUserTypes);
router.post('/',userTypeController.createUserType);

module.exports = router;