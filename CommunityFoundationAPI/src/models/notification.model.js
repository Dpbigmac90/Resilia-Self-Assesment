const mongoose = require('mongoose');

// Create a schema for notifications
// title: indicates important information i.e. 20% off, New Message!, etc...
// description: more accurate information about what the notification is about
// domain: a url for the user to follow
// icon: an optional .png file to be included for company logo
const NotificationSchema = mongoose.Schema({
    title: String,
    description: String,
    domain: String,
    icon: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Notification', NotificationSchema);