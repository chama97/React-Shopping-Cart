import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Sidebar from "../../component/sidebar";
import AdminNavbar from "../../component/appbar";
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CartService from "../../services/CartService";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SubmitButton from '../../component/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



class Cart extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userId: '',
                date: "",
                products: [{
                    productId: '',
                    quantity: ''
                },
                {
                    productId: '',
                    quantity: ''
                }]
                
            },
            alert: false,
            message: '',
            severity: '',
    
            data: [],
            userData: [],
            productData: [],
            btnLabel: 'save',
            btnColor: 'success',
           
        }
    }

    deleteCart = async (id) => {
        let params = {
            id: id
        }
         let res = await CartService.deleteCart(params);

         if(res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            this.loadData();
         } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
         }
    };

    updateCart = (data) => {
         console.log(data)

         this.setState({ 
            btnLabel: 'update',
            btnColor: 'primary',
            formData: {
                userId: data.userId,
                date: data.date,
                endDate: data.endDate,
                driverEmail: data.driverEmail
            }  
        });
    };

    clearFields = () => {
        this.setState({
            formData: {
                userId: '',
                date: "",
                products: [{
                    productId: '',
                    quantity: ''
                },
                {
                    productId: '',
                    quantity: ''
                }]
            }
        });
    };


    loadUserData = async () => {
        let res = await CartService.fetchUserId();

        if (res.status === 200) {
            this.setState({
                userData: res.data
            });
            console.log(this.state.userData)   
        } 
    };

    loadProductData = async () => {
        let res = await CartService.fetchProductId();

        if (res.status === 200) {
            this.setState({
                productData: res.data[0].id
                
            });
            console.log(res.data[0].id)   
        } 
    };

    loadData = async () => {
        let res = await CartService.fetchCart();

        if (res.status === 200) {
            this.setState({
                data: res.data
            });
        }   
    };

    submitCart = async () => {
        let formData = this.state.formData;

        if(this.state.btnLabel === "save") {
            let res = await CartService.postCart(formData);

            console.log(res)
    
            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else {
            let res = await CartService.putCart(formData);
            if(res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }
    };

    componentDidMount() {
        this.loadData();
        this.loadProductData();
        this.loadUserData();
    }

    
    render(){
        let { classes } = this.props
        return(
            <Fragment>

                <div className={classes.container}>

                    <div className={classes.leftSide}>
                        <Sidebar />
                    </div>
                    
                    <div className={classes.center}>

                        <div className={classes.appBar}>
                            <AdminNavbar />
                        </div>

                        <div className={classes.boxes}>

                        <div className={classes.widgets}>

                        <div className={classes.lblcustomer}><span>Cart</span></div> 
                            <hr className={classes.hr} /> 

                            <ValidatorForm ref="form" onSubmit={this.submitCart} onError={errors => console.log(errors)}>
                                <Grid container className={classes.gridss} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            options={this.state.userData}
                                            value={this.state.formData.userId}
                                            onChange={(event, value) => {
                                                let formData = this.state.formData
                                                formData.userId = value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                            renderInput={(params) => <TextField {...params} label="User ID" />}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6} style={{ marginTop:'20px'}} >
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            options={this.state.productData}
                                            // value={this.state.formData.products.productId}
                                            onChange={(event, value) => {
                                                let formData = this.state.formData
                                                formData.products.productId = value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                            renderInput={(params) => <TextField {...params} label="Product ID" />}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6}  >
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <Stack spacing={2}>
                                               <DatePicker
                                                    views={['day']}
                                                    label="PickUp Date"
                                                    value={this.state.formData.date}
                                                    onChange={(newValue) => {
                                                        let formData = this.state.formData
                                                        formData.date = newValue
                                                        this.setState({ formData })
                                                    }}
                                                    renderInput={(params) => <TextField {...params} helperText={null} />}
                                                />
                                            </Stack>
                                        </LocalizationProvider> 
                                        {/* <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            type="date"
                                            size="small"
                                            value={this.state.formData.date}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.date = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        /> */}
                                    </Grid>
                                    
                                    <Grid item lg={6} md={6} sm={6} xm={6}  >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Qty"
                                            size="small"
                                            value={this.state.formData.products.productId}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.products.productId = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    
                                    <Grid item lg={12} md={12} sm={12} xm={12}  style={{display: 'flex', justifyContent:"flex-end"}}  >
                                        <Stack spacing={1} direction="row">
                                            <TextField id="filled-search" label="Search field" type="search" size="small" variant="outlined"/>
                                            <Button variant="outlined">Search</Button>
                                            <Button variant="outlined" color="error">Cancel</Button>
                                            <SubmitButton variant="contained" label={this.state.btnLabel} type="submit" color={this.state.btnColor} />
                                        </Stack>
                                    </Grid>   
                                </Grid>
                            </ValidatorForm>
                        </div>
                        </div>

                        <div className={classes.table}>
                            <div className={classes.cartable}>          
                            <Grid container style={{ height: '100%', width: '100%', padding: '5px' }}>
                                <TableContainer component={Paper} style={{maxHeight: '100%'}}>
                                <Table sx={{ minWidth: 650 }} aria-label="customer table">
                                <TableHead>
                                <TableRow style={{backgroundImage: 'linear-gradient(to right top, #777277, #766e7a, #736a7e, #6c6783, #626589)'}}>
                                    <TableCell align="left" style={{color:'white'}}> ID</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> User Id</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Date</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Product ID</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Qty</TableCell>
                                    <TableCell align="left" style={{color:'white'}}>Action</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.id}</TableCell>
                                            <TableCell align="left">{row.userId}</TableCell>
                                            <TableCell align="left">{row.date}</TableCell>
                                            <TableCell align="left">{row.products[0].productId}</TableCell>
                                            <TableCell align="left">{row.products[0].quantity}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton 
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateCart(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteCart(row.id)
                                                        }}
                                                    >
                                                        <DeleteIcon color="error" />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                               </TableBody>
                               </Table>
                               </TableContainer>
                            </Grid>
                            </div>
                        
                        </div>

                    </div>
                    
                </div>
             
            </Fragment>
           
        )

    }
}

export default withStyles(styleSheet)(Cart) 