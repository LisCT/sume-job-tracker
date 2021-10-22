const express = require('express');
const { check } = require('express-validator');

const applicationsController = require('../controllers/applications-controllers');

const router = express.Router();

// Return Application per ID
router.get('/:jid', applicationsController.getApplicationById);

// Return List of jobs Application per creator/user
router.get('/user/:uid', applicationsController.getApplicationsByUserId);

router.post(
  '/',
  [
    check('company_name').not().isEmpty(),
    check('job_title').not().isEmpty()
  ],
  applicationsController.createApplication
);

router.patch('/:jid', [
  check('company_name').not().isEmpty(),
  check('job_title').not().isEmpty()
], applicationsController.updateApplication);

router.delete('/:jid', applicationsController.deleteApplication);

module.exports = router;