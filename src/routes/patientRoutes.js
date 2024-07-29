const express = require('express');
const passport = require('passport');
const { create, getById, getAll } = require('../controllers/patientController');

const router = express.Router();

router.post('/', passport.authenticate('jwt', { session: false }), create);
router.get('/:id', passport.authenticate('jwt', { session: false }), getById);
router.get('/', passport.authenticate('jwt', { session: false }), getAll);

module.exports = router;
