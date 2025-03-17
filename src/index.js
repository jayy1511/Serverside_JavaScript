const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  req.calculatedValue = 4 * 7;
  next();
});

app.get('/', (req, res) => {
  console.log(`Calculated value: ${req.calculatedValue}`);
  res.send(`The calculated value is: ${req.calculatedValue}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
