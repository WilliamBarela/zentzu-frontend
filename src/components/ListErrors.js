import React from 'react';

function ListError(props) {
  return <li>{props.value}</li>
}

function ListErrors(props) {
  const errors = props.errors;
  const errorsList = 
    errors ?
    errors.map( error => <ListError key={error.index} value={error.message} />) :
    null 

  return (
    <ul>
      {errorsList}
    </ul>
  )
}

export default ListErrors;
