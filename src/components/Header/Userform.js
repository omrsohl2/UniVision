// Form.js
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Header from './index';
import { withStyles } from '@material-ui/core/styles';
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
  type FormProps = {
    classes: Object,
  };
class Form extends React.Component<FormProps> {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      dob: '',
      address: '',
      contact: '',
      essay: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (
      this.state.name &&
      this.state.gender &&
      this.state.dob &&
      this.state.address &&
      this.state.contact &&
      this.state.essay
    ) {
      // Form is valid, you can proceed with submitting or other actions
      console.log('Form submitted with data:', this.state);
      this.props.history.push('/');
    } else {
      // Form is invalid, handle accordingly (show error messages, etc.)
      console.log('Please fill in all required fields.');
    }
  };

  handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(`File selected: ${file.name}`);
    // Add your logic to handle the file, e.g., store it in state
    // You can also perform other actions with the file, like uploading to a server
  };
  handleFileUpload2 = (e) => {
    const file = e.target.files[0];
    console.log(`File selected: ${file.name}`);
    // Add your logic to handle the file, e.g., store it in state
    // You can also perform other actions with the file, like uploading to a server
  };

  handleFileUpload3 = (e) => {
    const file = e.target.files[0];
    console.log(`File selected: ${file.name}`);
    // Add your logic to handle the file, e.g., store it in state
    // You can also perform other actions with the file, like uploading to a server
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header/>
        <div className={classes.container}>
      <div className="form-container">
        <Card variant="outlined" className="header-container">
          <CardContent>
            <h1>Fill out this form </h1>
           
          </CardContent>
        </Card>

        <form onSubmit={this.handleSubmit} className="form">
          <TextField
            label="Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <br />
          <TextField
            label="Gender"
            type="text"
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
            required
          />
          <br />
          <br/>
          <TextField
           
            type="date"
            name="dob"
            value={this.state.dob}
            onChange={this.handleChange}
            required
          />
          <br />
          <TextField
            label="Address"
            multiline
            rows={2}
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
            required
          />
          <br />
          <TextField
            label="Contact"
            type="tel"
            name="contact"
            value={this.state.contact}
            onChange={this.handleChange}
            required
          />
          <br />
          <TextField
            label="Essay/Personal Statement"
            multiline
            rows={5}
            name="essay"
            value={this.state.essay}
            onChange={this.handleChange}
            placeholder="Write your essay here (maximum 1000 characters)"
            maxLength={1000}
            required
          />
          <br />
          <br/>
          <div>Transcripts</div>
          <input
            
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={(e) => this.handleFileUpload(e)}
          />
          <br />
          <br/>
          <div>Letter of Recommendation</div>
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={(e) => this.handleFileUpload2(e)}
          />
          <br />
          <br/>
          <div>Additional Files (If any)</div>
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={(e) => this.handleFileUpload3(e)}
          />
          <br />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
      </div>
       <Footer/>
      </div>
    );
  }
}

export default (withStyles(styles)(Form));
