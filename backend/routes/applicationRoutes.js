const express = require('express');
const router = express.Router();
const { submitApplication, getApplications, updateApplicationStatus, deleteApplication } = require('../controllers/applicationController');
const upload = require('../services/uploadService');

router.post('/', upload.single('resume'), submitApplication);
router.get('/', getApplications);
router.put('/:id', updateApplicationStatus);
router.delete('/:id', deleteApplication);

module.exports = router;
