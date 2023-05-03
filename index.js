const express = require('express');
const app = express();
require('dotenv').config()
const jwt = require('jsonwebtoken')
const port = process.env.port || 5000;

const cors = require('cors')

app.use(express.json())
app.use(cors())

app.post('/register', (req, res) => {
    const data = req.body;
    console.log(data);
    // const accessToken = jwt.sign
})

app.get('/', (req, res) => {
    const token = req.headers.token;
    const details = jwt.decode(token);

    res.send(details);
})

app.listen(port, () => console.log(`listening to port: ${port}`));