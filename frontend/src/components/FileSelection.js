import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import projectexample from './img/projectexample.png'


export default class FileSelection extends Component {
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
      >Step 2: Select which files in each project you would like to compare.</h4>
      </div> 
      <div style= {{ 
        marginTop: '10%',
        marginLeft: '5%',
        position: 'absolute'
      }}>
      <img src={projectexample} />
      </div>
      <div style= {{ 
        marginTop: '10%',
        marginLeft: '50%',
        position: 'absolute'
      }}>
      <img src={projectexample} />
      </div>
      <Button
              variant="contained"
              onClick={this.continue}
              style={{
                marginTop: '47%',
                marginLeft: '75%'}}
            >Continue</Button>
    </div>
  );
}
}
