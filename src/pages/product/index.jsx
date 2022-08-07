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
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SubmitButton from '../../component/Button';
import ProductService from "../../services/ProductService";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import Autocomplete from '@mui/material/Autocomplete';


class Product extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                title: "",
                price: '',
                description: "",
                image: "",
                category: ""
            },
            alert: false,
            message: '',
            severity: '',
    
            data: [],
            categoryData: [],
            btnLabel: 'save',
            btnColor: 'success',
        }
    }

  

    deleteProduct = async (id) => {
        let params = {
            id: id
        }
         let res = await ProductService.deleteProduct(params);

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

    updateProduct = (data) => {
         console.log(data)

         this.setState({ 
            btnLabel: 'update',
            btnColor: 'primary',
            formData: {
                title: data.title,
                price: data.price,
                description: data.description,
                image: data.image,
                category: data.category,
            }  
        });
    };


    clearFields = () => {
        this.setState({
            formData: {
                title: "",
                price: '',
                description: "",
                image: null ,
                category: '' 
            }
        });
    };


    exampleForMap = () => {
        this.state.data.map((value, index) => {
            console.log(value)  
        })
    };

    loadData = async () => {
        let res = await ProductService.fetchProduct();

        if (res.status === 200) {
            this.setState({
                data: res.data
            });
        }
        console.log(this.state.data)   

        this.exampleForMap()

    };

    loadCategoryData = async () => {
        let res = await ProductService.fetchProductCategory();

        if (res.status === 200) {
            this.setState({
                categoryData: res.data
            });
        }
        console.log(this.state.categoryData)   

    };


    submitProduct = async () => {
        let formData = this.state.formData;

        if(this.state.btnLabel === "save") {
            let res = await ProductService.postProduct(formData);

            console.log(res)    //print the promise
    
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
            let res = await ProductService.putProduct(formData);
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
        this.loadCategoryData();
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

                        <div className={classes.lblcustomer}><span>Product</span></div> 
                            <hr className={classes.hr} /> 

                            <ValidatorForm ref="form" onSubmit={this.submitProduct} onError={errors => console.log(errors)}>
                                <Grid container className={classes.gridss} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Title"
                                            size="small"
                                            value={this.state.formData.title}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.title = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{ marginTop:'20px'}} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Price"
                                            size="small"
                                            value={this.state.formData.price}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.price = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6}  >
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            options={this.state.categoryData}
                                            value={this.state.formData.category}
                                            onChange={(event, value) => {
                                                let formData = this.state.formData
                                                formData.category = value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%' }}
                                            validators={['required',]}
                                            renderInput={(params) => <TextField {...params} label="Categorty" />}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6} >
                                        <TextValidator
                                            id="outlined-basic"
                                            variant="outlined"
                                            label="Description"
                                            size="small"
                                            value={this.state.formData.description}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.description = e.target.value
                                                this.setState({ formData })
                                            }}
                                            style={{ width: '100%',hight: '100px' }}
                                            validators={['required',]}
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{ display: 'flex', justifyContent:"flex-end"}} >
                                        <Stack spacing={1} direction="row">

                                            <Button variant="outlined" component="label">
                                                Choose Image
                                                <input hidden accept="image/*" multiple type="file" 
                                                    onChange={(e) => {
                                                        let formData = this.state.formData
                                                        formData.image= e.target.files[0]
                                                        console.log(e.target.files[0])
                                                        this.setState({ formData })
                                                    }}/>
                                            </Button> 
                                        </Stack>
                                    </Grid>
                                    
                                    
                                    <Grid item lg={6} md={6} sm={6} xm={6}  style={{display: 'flex', justifyContent:"flex-end"}}  >
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
                                <TableContainer component={Paper} sx={{maxHeight:'100%'}}>
                            <Table sx={{ minWidth: 650 }} aria-label="Category table">
                            <TableHead>
                                <TableRow style={{backgroundImage: 'linear-gradient(to right top, #777277, #766e7a, #736a7e, #6c6783, #626589)'}}>
                                    <TableCell align="left" style={{color:'white'}}> ID</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Title</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Price</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Description</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Image</TableCell>
                                    <TableCell align="left" style={{color:'white'}}> Category</TableCell>
                                    <TableCell align="left" style={{color:'white'}}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.id}</TableCell>
                                            <TableCell align="left">{row.title}</TableCell>
                                            <TableCell align="left">{row.price}</TableCell>
                                            <TableCell align="left">{row.description}</TableCell>
                                            <TableCell >
                                                <div className={classes.cellWrapper}>
                                                    <img src={row.image} alt="" className={classes.image} />
                                                </div>
                                            </TableCell>
                                            <TableCell align="left">{row.category}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton 
                                                        onClick={() => {
                                                            console.log("edit icon clicked!")
                                                            this.updateProduct(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteProduct(row.id)
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

export default withStyles(styleSheet)(Product) 