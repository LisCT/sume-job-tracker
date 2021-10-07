const { v4: uuid } = require('uuid');
const HttpError = require('../models/http-error');

const DUMMY_USER = [
  {
    id: 'u1',
    user: 'Lisct',
    email: 'lcruztaveras@gmail.com',
    password: 'tester',
    image: 'image url',
    firstName: 'Lisbel',
    lastName: 'Cruz',
    profession: 'software engineer',
    position: 'web developer',
    phone: 8095370166,
    resume: 'file',
    jobApplications: []
  }
];

const getUsers = (req, res, next) => {
  res.json({ user: DUMMY_USER });
}

const signup = (req, res, next) => {
    const { user, email, password } = req.body;

    const userExist = DUMMY_USER.find(user => user.email === email);
    if(userExist){
      throw new HttpError('Could not create user, user already exist.', 422);
    }

    const createdUser = {
      id: uuid(),
      user,
      email,
      password
    }

    DUMMY_USER.push(createdUser);
    res.status(201).json({ user: createdUser });
}

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USER.find( user => user.email === email);
  if(!identifiedUser || identifiedUser.password !== password){
    throw new HttpError('Could not identify user, credentials seem to be wrong', 401);
  }

  res.json({message: 'Logged in! '});
}

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;