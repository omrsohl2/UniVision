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
const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    padding: '20px',
    borderRadius: '10px',
    background: 'linear-gradient(to right, #3498db, #bdc3c7, #e74c3c, #ff00bf)', // Mix of blue, gray, light red, and pink
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle box shadow
    animation: '$pulse 1.5s infinite', // Pulse animation
  },
  '@keyframes pulse': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
    '100%': { transform: 'scale(1)' },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
  },
  inputField: {
    marginBottom: '15px',
  },
  checkboxGroup: {
    marginBottom: '15px',
  },
  submitButton: {
    marginTop: '20px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  card: {
    minWidth: '200px',
    margin: '10px',
    background: '#ffffff', // White background for cards
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle box shadow
    transition: 'transform 0.3s ease-in-out', // Smooth card hover effect
    '&:hover': {
      transform: 'scale(1.05)', // Enlarge on hover
    },
  },
  cardContent: {
    textAlign: 'center',
  },
  titleCard: {
    background: '#3498db', // Blue background for title card
    color: '#ffffff', // White text color
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
});

type QuestionProps = {
  classes: Object,
};

class Question extends React.Component<QuestionProps> {
  constructor(props) {
    super(props);

    this.state = {
      favoriteClasses: [],
      extracurricularActivities: [],
      religiousInstitution: false,
      majorImportance: '',
      monthlyIncome: '',
      postUniversityStatement: [],
    };
  }
  componentDidMount() {
    this.loadCollegeAISurvey();
  }

  loadCollegeAISurvey() {
    const surveyScript = document.createElement('script');
    surveyScript.src = 'https://api.collegeai.com/v1/api/survey';
    document.body.appendChild(surveyScript);
  }

  handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  handleMultipleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    this.setState((prevState) => {
      const prevValues = prevState[name];
      const updatedValues = checked
        ? [...prevValues, value]
        : prevValues.filter((v) => v !== value);

      return { ...prevState, [name]: updatedValues };
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({ ...prevState, [name]: value }));
  };

  onToggleSurvey = () => {
    this.props.history.push('/recommendation');
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header/>
      <div className={classes.container}>
        <Card className={classes.titleCard}>
          <CardContent>
            <Typography variant="h4" className={classes.title} gutterBottom>
              University Preferences Questionnaire
            </Typography>
          </CardContent>
        </Card>
        <form className={classes.form} onSubmit={this.handleSubmit}>
         
          <div className="collegeai-survey" data-questions-per-page="4" data-results-href="/recommendation"></div>
         
        </form>
        <div className={classes.cardContainer}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h6">Benefits of Completing the Questionnaire</Typography>
              <Typography variant="body2">
                Gain insights into your academic and extracurricular preferences.
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h6">Unlock Personalized Recommendations</Typography>
              <Typography variant="body2">
                Discover universities and programs tailored to your preferences.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Question));
