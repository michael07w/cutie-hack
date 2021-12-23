import React, { Component } from 'react';
import ControlButton from './controlButton';

class ControlPanel extends Component {
  render() {
    return (
      <div className='user-controls'>
          <ControlButton type = 'skip-previous' iconPath="/static/images/previousIcon.png"></ControlButton>
          <ControlButton type = 'pause' iconPath="/static/images/pauseIcon.png"></ControlButton>
          <ControlButton type = 'stop' iconPath="/static/images/stopIcon.png"></ControlButton>
          <ControlButton type = 'skip-previous' iconPath="/static/images/skipIcon.png"></ControlButton>
      </div>
    );
  }
}

export default ControlPanel;
