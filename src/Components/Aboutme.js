import React from 'react';
import '../ComponentCSS/Aboutme.css';

function Aboutme() {
  return (
      <div id ="aboutgrid">
        <div id ="aboutsection">
            <div id="aboutwrappertop">
              <h3>A little about me</h3>
            </div>  
            <div id="aboutwrapperbottom">
              <div id="abouttext">
                  <p>
                  I am a US Army Veteran who completed my Bachelors of Science in Computer Science at Pacific Lutheran University in Tacoma, Wa. 
                  </p>
                  <p>
                  I enjoy running, weightlifting, Brazilian Jiu-Jitsu and video games (Dota 2, Counter-Strike, Starcraft) on my free time. 
                  </p>
                  <p>
                  My favorite TV show is It's Always Sunny in Philadelphia and a psychic once told me I was a ninja in a past life.
                  </p>
                  <p>
                  I'm scared of heights, spiders, poorly documented code and small women holding umbrellas.
                  </p>
                  <p>
                  There's nothing more exciting than a cross-country road trip.
                  </p>
              </div>
              <div id="skills">
                <div id="skillhighlight">
                  <div id="skilltext">Skills</div>
                </div>
                <div id="skillslist">
                  <ul>
                    <li>Angular 10</li>
                    <li>NGRX</li>
                    <li>Java</li>
                    <li>C# (.Net)</li>
                    <li>Javascript</li>
                    <li>PHP</li>
                  </ul>
                  <ul>
                    <li>Node.js</li>
                    <li>React.js</li>
                    <li>MySQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Git</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
  );
}

export default Aboutme;