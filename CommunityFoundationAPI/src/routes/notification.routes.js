const express = require('express')
const router = express.Router()
const notificationController = require('../controllers/notification.controllers');
// Retrieve all notifications
router.get('/', notificationController.findAll);
// Create a new notification
router.post('/', notificationController.create);
// Retrieve a single notification with id
router.get('/:id', notificationController.findOne);
// Update a notification with id
router.put('/:id', notificationController.update);
// Delete a notification with id
router.delete('/:id', notificationController.delete);
module.exports = router