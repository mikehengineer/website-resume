import React from 'react';
import '../ComponentCSS/Splash.css';

function Splash() {
  return (
    <div id ="splashgrid">
      <div id ="herosection">
          <div id="herowrappertop">
            <div id="heroheader"><h1>Hello, my name is Michael</h1></div>
          </div>
          <div id="herowrapperbottom">
              <div id="herotext">   
                <p>I am an associate level software engineer and part-time web developer currently working in the
                Austin, Tx area.
                <br />
                <br />
                Interested in both back-end and front-end software development roles!
                </p>
              </div>
              <div id="heroimage">
                <img src="./MH.png" alt="portrait"/>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Splash;