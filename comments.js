// Create web server

// Import module
const express = require('express');
const app = express();

// Import module
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import module
const cors = require('cors');
app.use(cors());

// Import module
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

// Import module
const Comment = require('./models/comment');

// Create function
app.post('/api/v1/comments', (req, res) => {
  const comment = new Comment({
    name: req.body.name,
    comment: req.body.comment
  });
  comment.save().then(() => {
    res.send(comment);
  }).catch((error) => {
    res.status(400).send(error);
  });
});

// Create function
app.get('/api/v1/comments', (req, res) => {
  Comment.find().then((comments) => {
    res.send(comments);
  }).catch((error) => {
    res.status(500).send(error);
  });
});

// Create function
app.get('/api/v1/comments/:id', (req, res) => {
  Comment.findById(req.params.id).then((comment) => {
    if (comment) {
      res.send(comment);
    } else {
      res.status(404).send();
    }
  }).catch((error) => {
    res.status(500).send(error);
  });
});

// Create function
app.patch('/api/v1/comments/:id', (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body).then((comment) => {
    if (comment) {
      res.send(comment);
    } else {
      res.status(404).send();
    }
  }).catch((error) => {
    res.status(400).send(error);
  });
});

// Create function
app.delete('/api/v1/comments/:id', (req, res) => {
  Comment.findByIdAndRemove(req.params.id).then((comment) => {
    if (comment) {
      res.send(comment);
    } else {
      res.status(404).send();
    }
  }).catch((error) => {
    res.status(500).send(error);
  });
});

// Create function
app.listen(3000, () => {
  console.log('Server started');
});