// @flow

import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { push as pushRoute } from 'react-router-redux';
import { Link, withRouter } from 'react-router-dom';
import Header from './index';
import Footer from '../Footer';
import Form from './Userform';
type ListProps = {
  classes: Object,
};

class List extends React.Component<ListProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadCollegeAISurvey();
  }

  loadCollegeAISurvey() {
    const recommendscript = document.createElement('script');
    recommendscript.src = 'https://api.collegeai.com/v1/api/college-list';
    document.body.appendChild(recommendscript);
  }

  // Function to handle file upload
  handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(`File selected: ${file.name}`);
    // Add your logic to handle the file, e.g., store it in state
    // You can also perform other actions with the file, like uploading to a server
  };
  onToggleform = () =>{
    this.props.history.push('/form');
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header />
        <Card>
        <h1>Attention!</h1>
          <p>You can remove universities from here. But once you click the Apply button, it will apply to all the universities added in this list.</p>
          </Card>
        <div
          className="collegeai-college-list"
          data-colleges-per-page="10"
          data-show-student-list="true"
          data-show-recommended="true"
        ></div>
       
        <Button
          onClick={this.onToggleform}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            margin: 'auto',
            display: 'block',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            fontWeight: 'bold',
            marginTop: '20px',
            
          }}
        >
          Apply to all these universities
        </Button>
        <Footer/>
      </div>
    );
  }
}

export default List;
