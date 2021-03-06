import React from 'react';
import '../ComponentCSS/Experience.css';

function Experience() {
  return (
    <div id ="experiencegrid">
      <div id ="experiencesection">
          <div id="experiencewrappertop">
            <div id="experienceheader"><h4>Experience</h4></div>
          </div>
          <div id="experiencewrapperbottom">
                <div className="experiencecell">              
                  <div className="experiencecompany">Server <span className="companyname">@ IHOP </span></div>
                  <div className="experiencedate">May, 2020 - Aug, 2020</div>
                    <div className="experiencebody">
                      <ul>
                            <li>Ensuring customers are greeted quickly upon arrival and seated.</li>
                            <li>Taking orders and ensuring that special requests are honored whenever possible.</li>
                            <li>Getting food and beverages out to customers in a timely fashion.</li>
                            <li>Providing change and processing credit card payments. </li>
                      </ul>
                    </div>
                </div>
                <div className="experiencecell">
                  <div className="experiencecompany">Leave of Absence <span className="companyname">@ Home</span></div>
                    <div className="experiencedate">November, 2017 – January, 2020</div>
                      <div className="experiencebody">
                        <ul>
                              <li>Fulltime caregiver for family member.</li>
                        </ul>
                      </div>
                  </div>
                <div className="experiencecell">
                  <div className="experiencecompany">Software Engineer I <span className="companyname">@ AIT Engineering</span></div>
                    <div className="experiencedate">July, 2017 – November, 2017</div>
                      <div className="experiencebody">
                        <ul>
                              <li>Developed enterprise software in C# using DevExpress libraries and an MVVM paradigm.</li>
                              <li>Designed, developed and maintained technical components and templates.</li>
                              <li>Tested, debugged and fixed new and existing applications.</li>
                              <li>Interacted and coordinated deliverables with other technical groups in the organization.</li>
                              <li>Traveled to client sites to assist in the integration and troubleshooting of software systems.</li>
                        </ul>
                    </div>
                </div>
                  <div className="experiencecell">
                    <div className="experiencecompany">Software Engineer Intern <span className="companyname">@ Georgia Tech Manufacturing Institute</span></div>
                      <div className="experiencedate">May, 2015 - August, 2015</div>
                        <div className="experiencebody">
                          <ul>
                                <li>Implemented a web service back end that inventoried and tracked equipment across campus.</li>
                                <li>Developed a RESTful web application in PHP.  This application would parse a URI to generate complex<br /> &nbsp;MySQL database queries and would return the results in JSON to the front end.</li>
                                <li>Managed project version control (GIT).</li>
                                <li>Created APIs that allowed other web services to create queries and embed the returned data.</li>
                          </ul>
                        </div>
                    </div>
              </div>
          </div>
      </div>
  );
}

export default Experience;