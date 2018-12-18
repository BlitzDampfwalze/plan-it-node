const _ = {
  pick: require('lodash.pick'),
  isboolean: require('lodash.isboolean')
};

const { ObjectID } = require('mongodb');
const { Expense } = require('../models/Expense');
const { authenticate } = require('../middleware/authenticate');

module.exports = app => {

  app.post('api/expenses', (req, res) => {
    console.log(req.body);

    const expense = new Expense({
      // userID: req.user._id,
      date: req.body.date,
      time: req.body.number,
      details: req.body.details
    });

    expense.save().then(expense => {
      res.send(expense);
    })
      .catch(err => { res.status(500).send(err) });
  });

  app.put('/api/expenses/:id',
    // authenticate, 
    (req, res) => {
      console.log(req.body);

      Expense.findOneAndUpdate(
        {
          _id: req.params.id,
          // userID: req.user._id 
        },
        {
          date: req.body.date,
          time: req.body.number,
          details: req.body.details
        }
      ).then(expense => {
        res.send(expense);
      })
        .catch(err => { res.status(500).send(err) });
    });

  app.get('/api/expenses',
    // authenticate, 
    (req, res) => {
      Expense.find(
        // { userID: req.user._id }
      ).then((expenses) => {
        res.send({ expenses })
      }) //{} syntax vs res.json(...map etc.)
        .catch(err => { res.status(500).send(err) });
    });

  app.get('/api/expenses/:id',
    // authenticate, 
    (req, res) => {

      if (!ObjectID.isValid(req.params.id)) {
        return res.sendStatus(404);
      }

      Expense.findById(req.params.id).then(expense => {
        if (!expense) {
          return res.sendStatus(404);
        }
        res.send({ expense });
      })
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: 'something went wrong' });
        });
    });

  app.delete('/api/expenses/:id',
    // authenticate, 
    (req, res) => {

      if (!ObjectID.isValid(req.params.id)) {
        return res.status(404).send('Invalid ID');
      }

      Expense.findByIdAndRemove(req.params.id)
        .then(() => {
          res.sendStatus(204);
        })
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: 'something went wrong' });
        });
    });

};