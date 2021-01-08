import React from 'react';

const List = ({ listValues = [] }) => (
  <ul>
    {listValues.map((item) => <li key={`List-item-${item.id}`}>{item}</li>)}
  </ul>
);

export default List;
