import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import resultexample from './img/resultexample.png'


export default class FinaldResults extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
  return (
    <div>
    <div style= {{
           borderRight: '4px solid black',
           borderBottom: '4px solid black',
           width: '50%',
           position: 'absolute',
       }}>
      <h1
      style= {{ 
        textTransform: 'uppercase',
      }}
      >Plagiarism Detector</h1>
      <h4
      style= {{ 
        textTransform: 'uppercase',
      }}
      >Step 3: You're done! View the results below. </h4>
      </div> 
      <div style= {{ 
        marginTop: '10%',
        marginLeft: '5%',
        position: 'absolute'
      }}>
      <img src={resultexample} 
      style= {{ 
        width: '500px',
      }}/>
      </div>
      <Button
              variant="contained"
              onClick={this.back}
              style={{
                marginTop: '47%',
                marginLeft: '75%'}}
            >Back</Button>
    </div>
  );
}
}
