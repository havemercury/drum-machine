import React, { Component } from 'react';
import Heading from '../components/Heading';
import Display from '../components/Display';
import DrumPad from '../components/DrumPad';

import './App.scss';
import boom from '../assets/boom.wav';
import clap from '../assets/clap.wav';
import hihat from '../assets/hihat.wav';
import kick from '../assets/kick.wav';
import openhat from '../assets/openhat.wav';
import ride from '../assets/ride.wav';
import snare from '../assets/snare.wav';
import tink from '../assets/tink.wav';
import tom from '../assets/tom.wav';

const drumPads = [
  {
    name: 'openhat',
    clip: openhat,
    trigger: 'q'
  },
  {
    name: 'hihat',
    clip: hihat,
    trigger: 'w'
  },
  {
    name: 'clap',
    clip: clap,
    trigger: 'e'
  },
  {
    name: 'kick',
    clip: kick,
    trigger: 'a'
  },
  {
    name: 'snare',
    clip: snare,
    trigger: 's'
  },
  {
    name: 'tom',
    clip: tom,
    trigger: 'd'
  },
  {
    name: 'tink',
    clip: tink,
    trigger: 'z'
  },
  {
    name: 'ride',
    clip: ride,
    trigger: 'x'
  },
  {
    name: 'boom',
    clip: boom,
    trigger: 'c'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'Press something'
    };
    this.checkKeyDown = this.checkKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.checkKeyDown);
  }

  checkKeyDown(e) {
    for (let i = 0; i < drumPads.length; i++) {
      if (e.key === drumPads[i].trigger) {
        this.playAudio(e.key, drumPads[i].name);
        let pressedPad = document.getElementById(`${drumPads[i].name}`);
        pressedPad.classList.add('playing');
        const removePlayingClass = () => pressedPad.classList.remove('playing');
        setTimeout(removePlayingClass, 200);
      }
    }
  }

  playAudio(id, name) {
    let audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();

    this.setState({
      display: name
    });
  }

  render() {
    const drumPadDisplay = drumPads.map(pad => (
      <DrumPad
        letter={pad.trigger}
        clip={pad.clip}
        key={pad.trigger}
        name={pad.name}
        click={this.playAudio.bind(this, pad.trigger, pad.name)}
      />
    ));
    return (
      <div className='App'>
        <div id='drum-machine' className='center-vh-container'>
          <div className='center-vh-item'>
            <Heading title='Drum Machine' />
            <Display text={this.state.display} />
            {drumPadDisplay}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
