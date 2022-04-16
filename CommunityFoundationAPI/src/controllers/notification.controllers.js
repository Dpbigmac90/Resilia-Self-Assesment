const Notification = require('../models/notification.model.js');

// Retrieve and return all notifications from the database.
exports.findAll = (req, res) => {
Notification.find()
  .then(notifications => {
  res.send(notifications);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while getting list of notifications."
});
});
};
// Create and Save a new notification
exports.create = (req, res) => {
// Validate request
if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}

// Create a new notification
const notification = new Notification({
  title: req.body.title,
  description: req.body.description,
  domain: req.body.domain,
  icon: req.body.icon
});

// Save notification in the database
notification.save()
  .then(data => {
  res.send(data);
}).catch(err => {
  res.status(500).send({
  message: err.message || "Something went wrong while creating new notification."
});
});
};

// Find a single notification with a id
exports.findOne = (req, res) => {
 notification.findById(req.params.id)
  .then(notification => {
  if(!notification) {
   return res.status(404).send({
   message: "notification not found with id " + req.params.id
 });
}
 res.send(notification);
}).catch(err => {
  if(err.kind === 'ObjectId') {
    return res.status(404).send({
    message: "notification not found with id " + req.params.id
  });
}
return res.status(500).send({
  message: "Error getting notification with id " + req.params.id
});
});
};

// Update a notification identified by the id in the request
exports.update = (req, res) => {
// Validate Request
if(!req.body) {
  return res.status(400).send({
  message: "Please fill all required field"
});
}

// Find notification and update it with the request body
notification.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    domain: req.body.domain,
    icon: req.body.icon
}, {new: true})
.then(notification => {
 if(!notification) {
   return res.status(404).send({
   message: "notification not found with id " + req.params.id
 });
}
res.send(notification);
}).catch(err => {
if(err.kind === 'ObjectId') {
  return res.status(404).send({
  message: "notification not found with id " + req.params.id
});
}
return res.status(500).send({
  message: "Error updating notification with id " + req.params.id
});
});
};

// Delete a notification with the specified id in the request
exports.delete = (req, res) => {
notification.findByIdAndRemove(req.params.id)
.then(notification => {
if(!notification) {
  return res.status(404).send({
  message: "notification not found with id " + req.params.id
});
}
res.send({message: "notification deleted successfully!"});
}).catch(err => {
if(err.kind === 'ObjectId' || err.name === 'NotFound') {
  return res.status(404).send({
  message: "notification not found with id " + req.params.id
});
}
return res.status(500).send({
  message: "Could not delete notification with id " + req.params.id
});
});
};