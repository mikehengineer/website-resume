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
          <div className="projectscell">
                  <div className="projectstitle">Loan Applicant App Front-End (2020)</div>
                    <div className="projectsdate"><a href="https://github.com/mikehengineer/Sync1NGRXFrontEnd">Github: Angular 10/NGRX Front-End</a></div>
                      <div className="projectsbody">
                        <ul>
                              <li>Front-end application written in Angular 10.</li>
                              <li>NGRX Store for state management.</li>
                              <li>NGRX Entities for front-end record management.</li>
                              <li>NGRX Effects to process back-end API database queries.</li>
                              <li>NGRX Routing to implement a RESTful API.</li>
                              <li>Features reactive form validation.</li>
                              <li>Features Angular Materials for the UI template and components (layout, tables, forms, etc).</li>
                        </ul>
                    </div>
                </div>
                <div className="projectscell">
                  <div className="projectstitle">Loan Applicant App Back-End (2020)</div>
                    <div className="projectsdate"><a href="https://github.com/mikehengineer/Sync1Demo">Github: .Net Back-End</a></div>
                      <div className="projectsbody">
                        <ul>
                              <li>Written in C# (.Net 3.1 Framework)</li>
                              <li>Features a CRUD API attached to a MSSQL database.</li>
                              <li>Entity framework for database management.</li>
                        </ul>
                    </div>
                </div>
                <div className="projectscell">              
                  <div className="projectstitle">Website Resume (2020)</div>
                  <div className="projectsdate"><a href="https://github.com/mikehengineer/website-resume">Github: Website Resume</a></div>
                    <div className="projectsbody">
                      <ul>
                            <li>Written in Javascript (React.js), HTML and CSS.</li>
                            <li>Uses React hooks to create a single page web app.</li>
                      </ul>
                    </div>
                </div>
                <div className="projectscell">
                  <div className="projectstitle">H2Optimize Dashboard Demo (2018)</div>
                    <div className="projectsdate"><a href="https://github.com/mikehengineer/h2odemo">Github: H2O Demo</a></div>
                      <div className="projectsbody">
                        <ul>
                              <li>Written in PHP (Laravel Framework)</li>
                              <li>MVC design that allows a user to login and view a dashboard displaying the metrics for a water meter.</li>
                              <li>Uses HighCharts API to display graph data.</li>
                        </ul>
                      </div>
                  </div>
                  <div className="projectscell">
                    <div className="projectstitle">Capstone Project (2016)</div>
                      <div className="projectsdate"><a href="https://github.com/mikehengineer/Capstone">Github: Capstone</a></div>
                        <div className="projectsbody">
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