import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends React.Component {
    render() {
    return (
          <div >
            <AppBar position="static"
                  style={{ backgroundColor:"#aebfbe",
                  color: 'black'}}>
              <Tabs aria-label="simple tabs example">
              <Tab label="Plagiarism Detector"  />
              </Tabs>
            </AppBar>
          </div>
        );
      }
    }
  
  export default Header;