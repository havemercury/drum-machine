import React from 'react';
import './DrumPad.scss';

function DrumPad(props) {
  return (
    <div className='drum-pad' onClick={props.click} id={props.letter}>
      {props.letter}
      <audio src={props.clip} id={`play${props.letter}`}></audio>
    </div>
  );
}

export default DrumPad;
