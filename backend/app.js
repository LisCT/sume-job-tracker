const express = require('express');
const bodyParser = require('body-parser');

const applicationsRoutes = require('./routes/applications-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/api/applications', applicationsRoutes);

app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
 throw new HttpError('could not find this route.', 404);
})

app.use((error, req, res, next) => {
  if(res.headerSent){
    return next(error);
  }

  res.status(error.code || 500);
  res.json({message: error.message || 'An unknow error occured!'});
});

app.listen(5000);