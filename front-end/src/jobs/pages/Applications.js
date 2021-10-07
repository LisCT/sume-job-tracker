import React from 'react';
import ApplicationList from '../components/ApplicationList';

const Applications = () => {

  const JOBS = [{
    'id': '001',
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

  return(
    <ApplicationList jobs={JOBS}/>
  )
};

export default Applications;