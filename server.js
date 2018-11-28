require('./config/config')

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const app = express();

app.use(express.static('public'));
app.use(morgan('common'));
app.use(bodyParser.json());

require('./routes/eventRoutes')(app);
require('./routes/userRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));

module.exports = { app };