import React from 'react';
import PageDisplay from '../Components/PageDisplay.js';
import '../ComponentCSS/Mainpage.css';

class Mainpage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                  viewName: 'Splash',
                  nameArray: ["About Me", "Experience", "Projects", "Contact", "Splash"],
  };
  this.handleButtonClicked = this.handleButtonClicked.bind(this);
  }      
      render(){
        return (
            <div id="mainarea">
                <div id="backgroundcontainer">
                  <div id="navbar">
                      <div id="nameholder"><div data-div_id="4" onClick={this.handleButtonClicked}>Michael House</div></div>
                      {[0, 1, 2, 3].map(divId => (
                      <div class="navitem"
                        key={divId}
                        data-div_id={divId}
                        data-div_name={`Div ${divId}`}
                        onClick={this.handleButtonClicked}
                      ><div>
                        {this.state.nameArray[divId]}
                      </div>
                      </div>
                    ))}
                  </div>
                  <div id="maincontainer">
                    <PageDisplay viewName = {this.state.viewName} />
                  </div> 
                </div>           
            </div>
        )
      }

      handleButtonClicked(e) {
        this.setState({
          viewName: this.state.nameArray[e.currentTarget.dataset.div_id]
        });
      };

  }

export default Mainpage;
