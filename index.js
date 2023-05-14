const express = require('express');
const app = express();
const port = 3000;

const calculatorController = require('./calculator');

app.get('/add', calculatorController.add);
app.get('/subtract', calculatorController.subtract);
app.get('/multiply', calculatorController.multiply);
app.get('/divide', calculatorController.divide);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

