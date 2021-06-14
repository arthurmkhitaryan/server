const express = require('express');
const app = express();
const env = require("dotenv");
env.config();
const port = process.env.PORT || 3001;
const cors = require('cors');

const bodyParser = require('body-parser');

const router = require('./routes/index');

app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1", router);


app.listen(port, () => {
  console.log(`App has been started on port:${port}...`);
})




