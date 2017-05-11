import React from 'react';

const ItemDetail = props => {
  console.log(props.ownProps);
  console.log(props);
  return(
  <ul>
    <li><h4>{props.item.name}</h4></li>
    <li>Happiness: {props.item.happiness}</li>
    <li>Price: ${props.item.price}</li>
  </ul>
  );
};

export default ItemDetail;
