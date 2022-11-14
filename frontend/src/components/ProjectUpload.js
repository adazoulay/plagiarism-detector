import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import UploadButtons from '../uploadbutton.js'
import Box from '@material-ui/core/Box';


export class ProjectUpload extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div>
       <div style= {{
           borderTop: '4px solid black',
           borderRight: '4px solid black',
           borderBottom: '4px solid black',
           width: '35%',
           padding: '90px',
           marginTop: '10%',
           position: 'absolute',
       }}>
      <h1 style= {{ 
          textAlign: 'center',
          textTransform: 'uppercase',
      }}
      >Plagiarism Detector</h1>
      <h4
      style= {{ 
        textAlign: 'center',
        textTransform: 'uppercase',
      }}
      >Step 1: Start by uploading the two projects or files you would like to compare.</h4>
      </div> 
      <div style= {{
        borderLeft: '4px solid black',
        borderRight: '4px solid black',
        borderBottom: '4px solid black',
        width: '45%',  
        height: '80%',
        marginLeft:'55%', 
      }}>
      <TableContainer style={{
        backgroundColor:"#ffffff",
        padding: '10px', }}>
                  <h2> Upload Projects</h2>

            <Box 
        style={{
          position: 'relative',
          textAlign: 'center',
          width: '30%',
          padding: '10px', 
          margin: 'auto',
          marginTop:'7.5%',
          backgroundColor: 'aebfbe',
          border: '2px solid #aebfbe',
        }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Project 1</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                <TableCell> <UploadButtons /> </TableCell>
          </TableBody>
        </Table>
        </Box>
        <Box 
        style={{
          position: 'relative',
          textAlign: 'center',
          width: '30%',
          padding: '10px', 
          margin: 'auto',
          marginTop:'5%',
          backgroundColor: 'aebfbe',
          border: '2px solid #aebfbe',
        }}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell> Project 2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                <TableCell> <UploadButtons /> </TableCell>
          </TableBody>
        </Table>
        </Box>
        <br /> <br /> <br /> <br /> <br />
      </TableContainer>
      <Button
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
       <br /><br /> <br /> <br /> <br /> <br />
      </div>
      </div>
    );
  }
}
export default ProjectUpload;
