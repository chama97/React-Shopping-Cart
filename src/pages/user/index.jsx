import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Sidebar from "../../component/sidebar";
import AdminNavbar from "../../component/appbar";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CustomerService from "../../services/CustomerService";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class User extends Component{

    constructor(props) {
        super(props);
        this.state = {

            alert: false,
            message: '',
            severity: '',
    
            data: [],
        }
    }

    deleteCustomer = async (id) => {
         let res = await CustomerService.deleteCustomer(id);

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

    
    loadData = async () => {
        let res = await CustomerService.fetchCustomer();

        if (res.status === 200) {
            this.setState({
                data: res.data
            });
        }
    };

    componentDidMount() {
        this.loadData();
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

                        <div className={classes.table}>
                            <div className={classes.custable}>  
                                {/* <div className={classes.lblcustomer}><span>Users</span></div> 
                                <hr className={classes.hr} /> 

                                <Stack className={classes.stack} spacing={2} direction="row">
                                    <TextField id="filled-search" label="Search field" type="search" size="small" variant="outlined"/>
                                    <Button variant="outlined">Search</Button>
                                </Stack>   */}

                                <Grid container style={{ height: '100%', width: '100%', padding: '15px' }}>
                                <TableContainer component={Paper} sx={{maxHeight:'100%', maxWidth:'100%'}}>
                                <Table sx={{ minWidth: 650 }} aria-label="customer table">
                                <TableHead>
                                <TableRow style={{backgroundImage: 'linear-gradient(to right top, #777277, #766e7a, #736a7e, #6c6783, #626589)'}}>
                                    <TableCell align="left" style={{color:'white'}}> ID</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> FirstName</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> LastName</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Email</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> UserName</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Password</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> City</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Street</TableCell>
                                    <TableCell align="left" style={{color:'white'}}>StreetNo</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> ZipCode</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> LetValue</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> LongValue</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Contact</TableCell>
                                    <TableCell align="left" style={{color:'white'}}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                
                                {
                                    this.state.data.map((row) => (
                                       
                                        <TableRow>
                                            <TableCell align="left">{row.id}</TableCell>
                                            <TableCell align="left">{row.name.firstname}</TableCell>
                                            <TableCell align="left">{row.name.lastname}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.username}</TableCell>
                                            <TableCell align="left">{row.password}</TableCell>
                                            <TableCell align="left">{row.address.city}</TableCell>
                                            <TableCell align="left">{row.address.street}</TableCell>
                                            <TableCell align="left">{row.address.number}</TableCell>
                                            <TableCell align="left">{row.address.zipcode}</TableCell>
                                            <TableCell align="left">{row.address.geolocation.lat}</TableCell>
                                            <TableCell align="left">{row.address.geolocation.long}</TableCell>
                                            <TableCell align="left">{row.phone}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteCustomer(row.id)
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

export default withStyles(styleSheet)(User) 