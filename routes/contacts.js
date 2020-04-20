const express = require('express');
const router = express.Router();

// @routes    Get api/contacts
// @desc      Get all users contacts
// @access    Private
router.get('/', (req, res ) => {
  res.send('Get all contacts');
});

// @routes    POST api/contacts
// @desc      Add new contact
// @access    Private
router.post('/', (req, res ) => {
  res.send('Add contact');
});

// @routes    Put api/contacts/:id
// @desc      Update contact
// @access    Private
router.put('/:id', (req, res ) => {
  res.send('Update contact');
});

// @routes    Delete api/contacts/:id
// @desc      Delete contact
// @access    Private
router.delete('/:id', (req, res ) => {
  res.send('Delete contact');
});

module.exports = router;
