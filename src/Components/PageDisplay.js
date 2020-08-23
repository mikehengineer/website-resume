/* eslint-disable no-useless-constructor */
import React from 'react';
import '../ComponentCSS/PageDisplay.css';
import Aboutme from '../Components/Aboutme.js';
import Experience from '../Components/Experience.js';
import Projects from '../Components/Projects.js';
import Contact from '../Components/Contact.js';
import Splash from '../Components/Splash.js';


class PageDisplay extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const views = {
            'About Me': Aboutme,
            'Experience': Experience,
            'Projects': Projects,
            'Contact': Contact,
            'Splash': Splash
          }; 
        const viewString = this.props.viewName;
        const ViewReturn = views[viewString]; 
         return(
             <ViewReturn />
         );
    }
}
export default PageDisplay;