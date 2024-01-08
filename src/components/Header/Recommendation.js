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

type RecommendationProps = {
  classes: Object,
};

class Recommendation extends React.Component<RecommendationProps> {
  constructor(props) {
    super(props);

    
  }
  componentDidMount() {
    this.loadCollegeAISurvey();
  }

  loadCollegeAISurvey() {
    const recommendscript = document.createElement('script');
    recommendscript.src = 'https://api.collegeai.com/v1/api/recommend';
    document.body.appendChild(recommendscript);
  }
  onTogglelist = () => {
    this.props.history.push('/list');
  }
 

  

  render() {
    const { classes } = this.props;

    return (
     
     
        <div>
            <Header/>
        <div

          class="collegeai-college-list"
          data-colleges-per-page="10"
          data-show-recommended="true"
        >
           
        </div>
        <Button onClick={this.onTogglelist}  style={{
            backgroundColor: 'blue',
            color: 'white',
            margin: 'auto',
            display: 'block',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            fontWeight: 'bold',
            marginTop: '20px',
            
          }} variant="contained" color="primary" type="submit">
            Continue to your List.
          </Button>
        </div>
      
    );
  }
}


export default Recommendation