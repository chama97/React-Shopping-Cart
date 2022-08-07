import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Sidebar from "../../component/sidebar";
import Appbar from "../../component/appbar";
import ProductService from "../../services/ProductService";
import CustomerService from "../../services/CustomerService";
import CartService from "../../services/CartService";


class DashBoard extends Component{

    constructor(props) {
        super(props);
        this.state = {
        
            userData: [],
            productData: [],
            cartData: []
           
        }
    }

    loadProductData = async () => {
        let res = await ProductService.fetchProduct();

        if (res.status === 200) {
            this.setState({
                productData: res.data
            });
        }
        console.log(this.state.productData)   

    };

    loadUserData = async () => {
        let res = await CustomerService.fetchCustomer();

        if (res.status === 200) {
            this.setState({
                userData: res.data
            });
        }
        console.log(this.state.userData)   
    };

    loadCartData = async () => {
        let res = await CartService.fetchCart();

        if (res.status === 200) {
            this.setState({
                cartData: res.data
            });
        }   
        console.log(this.state.cartData)   
    };

    componentDidMount() {
        this.loadUserData();
        this.loadProductData();
        this.loadCartData();
    }

    render(){
        let { classes } = this.props
        return(
            <Fragment >

                <div className={classes.container}>

                    <div className={classes.leftSide}>
                        <Sidebar />
                    </div>
                    
                    <div className={classes.center}>

                        <div className={classes.appBar}>
                            <Appbar />
                        </div>

                        <div className={classes.boxes}>
                            <div className={classes.widgets}>
                                <div className={classes.widgTitle}><span>Product</span></div>
                                <div className={classes.widgBody}><span>{this.state.productData.length}</span></div>
                                <div className={classes.widgBottom}><span>View Details</span></div>
                            </div>
                            <div className={classes.widgets}>
                                <div className={classes.widgTitle}><span>Cart</span></div>
                                <div className={classes.widgBody}><span>{this.state.cartData.length}</span></div>
                                <div className={classes.widgBottom}><span>View Details</span></div>
                            </div>
                            <div className={classes.widgets}>
                                <div className={classes.widgTitle}><span>Users</span></div>
                                <div className={classes.widgBody}><span>{this.state.userData.length}</span></div>
                                <div className={classes.widgBottom}><span>View Details</span></div>
                            </div>
                            
                        </div>
                        <div className={classes.bottom}>
                           
                            
                        </div>

                    </div>
                    
                </div>
             
            </Fragment>
           
        )

    }
}

export default withStyles(styleSheet)(DashBoard) 