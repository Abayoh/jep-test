const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

//base route
app.get('/', (req, res) => {
  res.send('Hello World!!idj ddnewk change');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
