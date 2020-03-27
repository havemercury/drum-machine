import React from 'react';
import './DrumPad.scss';

function DrumPad(props) {
  return (
    <div className='drum-pad' onClick={props.click} id={props.name}>
      {props.letter}
      <audio src={props.clip} className='clip' id={props.letter}></audio>
    </div>
  );
}

export default DrumPad;
