const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the root of all evil');
});

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Bruce', lastName: 'Wayne'},
    {id: 2, firstName: 'Clark', lastName: 'Kent'},
    {id: 3, firstName: 'Poison', lastName: 'Ivy'}
  ];

  res.json(customers);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));