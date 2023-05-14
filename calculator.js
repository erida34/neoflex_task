module.exports = {
  add: function(req, res) {
    const { a, b } = req.query;
    const result = Number(a) + Number(b);
    res.send(result.toString());
  },

  subtract: function(req, res) {
    const { a, b } = req.query;
    const result = Number(a) - Number(b);
    res.send(result.toString());
  },

  multiply: function(req, res) {
    const { a, b } = req.query;
    const result = Number(a) * Number(b);
    res.send(result.toString());
  },

  divide: function(req, res) {
    const { a, b } = req.query;

    if (Number(b) === 0) {
      res.status(400).send('Cannot divide by zero');
      return;
    }

    const result = Number(a) / Number(b);
    res.send(result.toString());
  }
};

