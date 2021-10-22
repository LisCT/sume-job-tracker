const { v4: uuid } = require('uuid');
const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

let DUMMY_JOBS = [{
  'id': 'j01',
  'creator': 'u01',
  'company_name' : 'Verizon',
  'url_posted' : 'https://www.linkedin.com/jobs/search/?currentJobId=2678175521&pivotType=jymbii',
  'location' : 'Dallas,TX',
  'job_title' : 'Senior Software Engineer - TLS',
  'job_description' : 'Developing software applications in the CDN especially around the Transport Layer Security (TLS) product offerings.',
  'applied_on' : '08/23/2021',
  'follow_up' : '08/30/2021',
  'excitement': 4,
  'status' : [{
    'saved': true,
    'preparing': false,
    'applied': false,
    'interviewing': false,
    'negotiating': false,
    'accepted': false,
    'declined': false,
    'archived': false,
    'delete': false,
  }],
  'notes' : 'Applied throught Linkedin',
  'contacts' : [
    {
      'id': '',
      'first_name': '',
      'last_name': '',
      'email': '',
      'phone': '',
      'notes': '',
    }
  ],
  'agenda': [{
    'saved': [{
      'todos': [],
      'notes': ''
    }],
    'preparing': [{
      'todos': [],
      'notes': ''
    }],
    'applied': [{
      'todos': [],
      'notes': ''
    }],
    'interviewing': [{
      'todos': [],
      'notes': ''
    }],
    'negotiating': [{
      'todos': [],
      'notes': ''
    }],
    'accepted': [{
      'todos': [],
      'notes': ''
    }],
    'declined': [{
      'todos': [],
      'notes': ''
    }]
  }]
}];

const getApplicationById = (req, res, next) => {
  const jobId = req.params.jid;
  const job = DUMMY_JOBS.find(job => job.id === jobId );

  if(!job){
    throw new HttpError('Could not find an application for the provided id', 404);
  }
  res.json({job});
};

const getApplicationsByUserId= (req, res, next) => {
  const userId = req.params.uid;
  const jobs = DUMMY_JOBS.filter(job => job.creator === userId );

  if(!jobs || jobs.length === 0){
    return next(new HttpError('Could not find any application for the provided user id', 404));
   }
  res.json({jobs})
}

const createApplication = (req, res, next) => {
  const error = validationResult(req);
  if(!error.isEmpty()){
    throw new HttpError('Invalid input passed, please check your data', 422)
  }

  const { creator, company_name, job_title } = req.body;

  const createdApplication = {
    id: uuid(),
    creator,
    company_name,
    job_title
  };

  DUMMY_JOBS.push(createdApplication);
  res.status(201).json({job: createdApplication});
}

const updateApplication = (req, res, next) => {
  const error = validationResult(req);
  if(!error.isEmpty()){
    throw new HttpError('Invalid input passed, please check your data', 422)
  }

  const { company_name, job_title } = req.body;
  const jobId = req.params.jid;

  const updatedApplication = {...DUMMY_JOBS.find(job => job.id === jobId)};
  const applicationIndex = DUMMY_JOBS.findIndex(job => job.id === jobId);
  updatedApplication.company_name = company_name;
  updatedApplication.job_title = job_title;

  DUMMY_JOBS[applicationIndex] = updatedApplication;
  res.status(200).json({job: updatedApplication});

}

const deleteApplication = (req, res, next) => {
  const jobId = req.params.jid;
  DUMMY_JOBS = DUMMY_JOBS.filter(job => job.id !== jobId);
  res.status(200).json({message: 'Job Application Deleted.'});
}


exports.getApplicationById = getApplicationById;
exports.getApplicationsByUserId = getApplicationsByUserId;
exports.createApplication = createApplication;
exports.updateApplication = updateApplication;
exports.deleteApplication = deleteApplication;