const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const router = express.Router();

// @desc Auth with google
// @route GET /
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @desc Google Auth callback
// @route GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

// @desc Logout User
// @route /auth/Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
