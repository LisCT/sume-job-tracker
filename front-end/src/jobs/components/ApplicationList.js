import React from 'react';
import ApplicationItem from './AplicationItem';

const ApplicationList = props => {
  // if doesn't exist bring 1 item as example
  if(props.jobs.length === 0){
    return <ul><li>item as example data</li></ul>
  }

  return (
    <ul>
      {props.jobs.map(job =>
        <ApplicationItem
          key={job.id}
          companyName={job.company_name}
        />
        )}
    </ul>
  )
}

export default ApplicationList;