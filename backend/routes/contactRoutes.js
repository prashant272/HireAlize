const express = require('express');
const router = express.Router();
const { submitContact, getContacts } = require('../controllers/contactController');
const upload = require('../services/uploadService');
 
router.post('/', upload.single('resume'), submitContact);
router.get('/', getContacts);

module.exports = router;
