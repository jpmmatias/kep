const express = require('express');
const router = express.Router();

//@route              GET api/contacts
//@desc               Get all users contacts
//@access             Private
router.get('/', (req, res) => {
	res.send('Get all contacts');
});

//@route              Post api/contacts
//@desc              Add new Contact
//@access             Private
router.post('/', (req, res) => {
	res.send('Add new contact');
});

//@route              Put api/contacts
//@desc              update contact
//@access             Private
router.put('/:id', (req, res) => {
	res.send('update contact');
});

//@route              Delete api/contacts
//@desc              Delete contact
//@access             Private
router.delete('/:id', (req, res) => {
	res.send('delete contact');
});

module.exports = router;
