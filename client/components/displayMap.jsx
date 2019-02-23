import React from 'react';
import GameBoard from './gameBoard.jsx';

const DisplayMap = (props) => (
  <div
    className={props.selected ? `display-map-container-selected` : `display-map-container`}
    onClick={() => props.setSelectedMap(props.selected ? {} : props.map)}
  >
    <h4 className='display-map-name'>{props.map.name}</h4>
    <GameBoard displayBoard={props.map.board} />
  </div>
);

export default DisplayMap;