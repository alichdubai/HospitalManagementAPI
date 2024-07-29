const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const logger = require('./utils/logger');
const errorHandler = require('./utils/errorHandler');
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
// other route imports

dotenv.config();
require('./config/passport');

const app = express();

app.use(bodyParser.json());
app.use(logger);

app.use('/auth', authRoutes);
app.use('/patients', patientRoutes);
// other routes

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
