import React from 'react';

const EditExpensePage = (props) => (
  <div>
    <p>This is from the Edit component id: {props.match.params.id}</p>
  </div>
);

export default EditExpensePage;
