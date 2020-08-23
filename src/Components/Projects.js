import React from 'react';
import '../ComponentCSS/Projects.css';

function Projects() {
  return (
    <div id ="projectsgrid">
      <div id ="projectssection">
          <div id="projectswrappertop">
            <div id="projectsheader"><h4>Projects</h4></div>
          </div>
          <div id="projectswrapperbottom">
                <div class="projectscell">              
                  <div class="projectstitle">Async Mail App (2020)</div>
                  <div class="projectsdate"><a href="https://github.com/mikehengineer/AsyncMailApp">Github: Async Mail App</a></div>
                    <div class="projectsbody">
                      <ul>
                            <li>Written in C# (.NET Framework)</li>
                            <li>Full CRUD capabilities with a MySQL database attached.</li>
                            <li>Uses a G-Mail SMTP server to send emails asynchronously.</li>
                      </ul>
                    </div>
                </div>
                <div class="projectscell">              
                  <div class="projectstitle">Website Resume (2020)</div>
                  <div class="projectsdate"><a href="https://github.com/mikehengineer/website-resume">Github: Website Resume</a></div>
                    <div class="projectsbody">
                      <ul>
                            <li>Written in Javascript (React.js), HTML and CSS.</li>
                            <li>Uses react hooks to create a single page web app.</li>
                      </ul>
                    </div>
                </div>
                <div class="projectscell">
                  <div class="projectstitle">H2Optimize Dashboard Demo (2018)</div>
                    <div class="projectsdate"><a href="https://github.com/mikehengineer/h2odemo">Github: H2O Demo</a></div>
                      <div class="projectsbody">
                        <ul>
                              <li>Written in PHP (Laravel Framework)</li>
                              <li>MVC design that allows a user to login and view a dashboard displaying the metrics for a water meter.</li>
                              <li>Uses HighCharts API to display graph data.</li>
                        </ul>
                      </div>
                  </div>
                <div class="projectscell">
                  <div class="projectstitle">TSU Checkers (2018)</div>
                    <div class="projectsdate"><a href="https://github.com/mikehengineer/tsuchecker">TSU Checker</a></div>
                      <div class="projectsbody">
                        <ul>
                              <li>Written in PHP (Laravel Framework)</li>
                              <li>MVC design allowed a user to play a board game on the server.</li>
                        </ul>
                    </div>
                </div>
                  <div class="projectscell">
                    <div class="projectstitle">Capstone Project (2016)</div>
                      <div class="projectsdate"><a href="https://github.com/mikehengineer/Capstone">Capstone</a></div>
                        <div class="projectsbody">
                          <ul>
                                <li>Proof of concept project mimicking a smart home device.</li>
                                <li>Hosted on a BeagleBone Black microcomputer (ARM3 processor).</li>
                                <li>Peripheral devices wired to a breadboard: temperature sensors, pressure sensors and micro servos.</li>
                                <li>Debian Linux operating system.</li>
                                <li>Completely written in Javascript.</li>
                                <li>Custom built Node.js backend.</li>
                                <li>Uses a SQLite3 database.</li>
                          </ul>
                        </div>
                    </div>
              </div>
          </div>
      </div>
  );
}

export default Projects;