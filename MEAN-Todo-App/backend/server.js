const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', require('./routes/task.routes'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:3030`));
