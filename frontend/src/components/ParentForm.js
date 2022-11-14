import React, {Component} from 'react';
import FinalResults from './FinalResults';
import ProjectUpload from './ProjectUpload';
import FileSelection from './FileSelection';

export class ParentForm extends Component {
  state = {
    step: 1,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
            <ProjectUpload
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
            <FileSelection
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return(
            <FinalResults
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default ParentForm;

