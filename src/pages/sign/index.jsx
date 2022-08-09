import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../component/navbar";
import Signlogo from "../../assets/signup.png";
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import InputAdornment from '@mui/material/InputAdornment';
// import LockIcon from '@mui/icons-material/Lock';
// import EmailIcon from '@mui/icons-material/Email';
// import PersonIcon from '@mui/icons-material/Person';
// import CreditCardIcon from '@mui/icons-material/CreditCard';
// import HomeIcon from '@mui/icons-material/Home';
// import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import CustomerService from "../../services/CustomerService";
import SnackBar from "../../component/SnackBar";
import Grid from '@mui/material/Grid';


class Sign extends Component{

    constructor(props) {
        super(props);
        this.state = {
          formData: {
            email: '',
            username: '',
            password: '',
            name: {
                firstname: "",
                lastname: ""
            },
            address: {
                city: "",
                street: "",
                number: '',
                zipcode: "",
                geolocation: {
                    lat: "",
                    long: ""
                }
            },
            phone: ""
          },
          alert: false,
          message: '',
          severity: '',

        }
    }

    clearFields = () => {
      this.setState({
          formData: {
            email: '',
            username: '',
            password: '',
            name: {
                firstname: "",
                lastname: ""
            },
            address: {
                city: "",
                street: "",
                number: '',
                zipcode: "",
                geolocation: {
                    lat: "",
                    long: ""
                }
            },
            phone: ""
          }
      });
    };

    submitCustomer = async () => {
      let formData = this.state.formData;
      let res = await CustomerService.postCustomer(formData);

      console.log(res)    //print the promise
  
      if (res.status === 200) {
          this.setState({
              alert: true,
              message: 'done',
              severity: 'success'
          });
          this.clearFields();
      } else {
          this.setState({
              alert: true,
              message: 'error try again',
              severity: 'error'
          });
      }
    }

    render(){
        const { classes } = this.props;
        return(
            <Fragment >
                <div><Navbar /></div>
                <div className={classes.container}>

                <div className={classes.login__image}>
                    <img src={Signlogo} height={500} width={500} />
                </div>
                
                <div className={classes.login__cover}>
                    <div className={classes.title__container}>
                        <span className={classes.titles} >SIGN UP</span>
                    </div>
                    <ValidatorForm
                        ref="form"
                        onSubmit={this.submitCustomer}
                        onError={errors => console.log(errors)}
                        className={classes.form__container}>
                        <Grid container className={classes.gridss} spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                        <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                        <TextValidator
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                            value={this.state.formData.name.firstname}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.name.firstname = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required','matchRegexp:^[A-z]{3,10}$']}
                        />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                        <TextValidator
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            
                            value={this.state.formData.name.lastname}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.name.lastname = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required','matchRegexp:^[A-z]{3,15}$']}
                        />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextValidator
                            id="outlined-basic"
                            label="E-mail"
                            variant="outlined"
                            
                            value={this.state.formData.email}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.email = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required', 'isEmail']}
                        />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextValidator
                            id="outlined-basic"
                            label="User Name"
                            variant="outlined"
                            value={this.state.formData.username}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.username = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required',]}
                        />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextValidator
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type="password"
                            value={this.state.formData.password}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.password = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required',]}
                        />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextValidator
                            id="outlined-basic"
                            label="City"
                            variant="outlined"
                            value={this.state.formData.address.city}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.address.city = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required','matchRegexp:^[A-z0-9/ ]{3,20}$']}
                        />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6}>
                        <TextValidator
                            id="outlined-basic"
                            label="Street"
                            variant="outlined"
                            value={this.state.formData.address.street}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.address.street = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required',]}
                        />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextValidator
                            id="outlined-basic"
                            label="Street No"
                            variant="outlined"
                            value={this.state.formData.address.number}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.address.number = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required','matchRegexp:^[0-9]{1,5}$']}
                        />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextValidator
                            id="outlined-basic"
                            label="Zip Code"
                            variant="outlined"
                            value={this.state.formData.address.zipcode}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.address.zipcode = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required',]}
                        />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextValidator
                            id="outlined-basic"
                            label="Lap Value"
                            variant="outlined"
                            value={this.state.formData.address.geolocation.lat}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.address.geolocation.lat = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required',]}
                        />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextValidator
                            id="outlined-basic"
                            label="Long Value"
                            variant="outlined"
                            value={this.state.formData.address.geolocation.long}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.address.geolocation.long = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required',]}
                        />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} >
                        <TextValidator
                            id="outlined-basic"
                            label="Mobile No"
                            variant="outlined"
                            value={this.state.formData.phone}
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.phone = e.target.value
                                this.setState({ formData })
                            }}
                            style={{ width: '100%' }}
                            validators={['required',]}
                        />
                        </Grid>

                        <Grid item lg={6} md={6} sm={6} xm={6} >

                        </Grid>
                       <Grid item lg={6} md={6} sm={6} xm={6} >
                        <button className={classes.buttons}
                            variant="contained"
                            label="Sign-Up"
                            type="submit"
                          > Sign-Up
                        </button>
                        </Grid>
                        </Grid>
                    </ValidatorForm>
                
                </div>
                <SnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ alert: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </div>
           
            </Fragment>
        )

    }
}

export default withStyles(styleSheet)(Sign) 