import React from 'react';
import '../ComponentCSS/Contact.css';

function Contact() {
  return (
    <div id ="contactgrid">
          <div id ="contactsection">
                <div id="contactwrappertop">
                  <h4>Contact</h4>
                </div> 
                <div id="contactwrapperbottom">
                      <div id="contactrow1">
                        <div class="contactsubrow" id="h3name"><h4>Name</h4></div>
                        <div class="contactsubrow" id="namesubrow"><input type="text" id="name" name="firstname" placeholder="" /></div>
                      </div>
                      
                      <div id="contactrow2">
                        <div class="contactsubrow" id="h3email"><h4>Email</h4></div>
                        <div class="contactsubrow" id="emailsubrow"><input type="email" id="email" placeholder="" /></div>
                      </div>
                      <div id="contactrow3">
                        <div id="h3message">
                            <h4>Message</h4>
                        </div>
                        <div id="textsubrow">
                            <textarea id="subject" placeholder="" />
                        </div>
                      </div>
            </div>
          </div>
      </div>
  );
}

export default Contact;