const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const flags = {
  1: 'flag{X7r0b2a1V9u8Zc5k4Qx}',
  2: 'flag{aBcD3fGhIjKlMnOpQrSt}',
  3: 'flag{1n7r1c473_4ll_th3_d4t4}',
  4: 'flag{p9XjZ2w6LmYb1K7vT0eH}',
  5: 'flag{E4t9K5x2L1n0P3v8RzW6}',
};

app.post('/verify', (req, res) => {
  const { flag, flagNumber } = req.body;
  if (flags[flagNumber] && flag === flags[flagNumber]) {
    res.json({ message: 'Flag is correct!' });
  } else {
    res.json({ message: 'Incorrect flag. Try again!' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
