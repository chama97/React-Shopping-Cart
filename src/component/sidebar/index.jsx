import {Component} from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import CycloneIcon from '@mui/icons-material/Cyclone';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';


class Sidebar extends Component{

    
    render(){
        let { classes } = this.props

        return(
            <div className={classes.sidebar}>
                <div className={classes.top}>
                    <CycloneIcon className={classes.icontop} />
                    <Link to="/" style={{ textDecoration: "none" }}>
                        
                        <span className={classes.logo}>Shopping<span>Mall</span></span>
                    </Link>
                </div>
                <div className={classes.center}>
                    <ul className={classes.ul}>
                        <p className={classes.title}>MAIN</p>
                        <Link to="/dash" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <DashboardIcon className={classes.icon} />
                                <span className={classes.span}>Dashboard</span>
                            </li>
                        </Link>

                        <p className={classes.title}>Products</p>
                        <Link to="/product" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <CategoryIcon className={classes.icon} />
                                <span className={classes.span}>Product</span>
                            </li>
                        </Link>
                        

                        <p className={classes.title}>User</p>
                        <Link to="/user" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <PeopleAltIcon className={classes.icon} />
                                <span className={classes.span}>Users</span>
                            </li>
                        </Link>
                        

                        <p className={classes.title}>Cart</p>
                        <Link to="/cart" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <ShoppingCartIcon className={classes.icon} />
                                <span className={classes.span}>Cart</span>
                            </li>
                        </Link>
                        
                    </ul>
                </div>
                <hr />
                <div className={classes.bottom}>
                    <ul className={classes.ul}>
                        <Link to="/dash" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <HomeIcon className={classes.icon} />
                                <span className={classes.span}>Home</span>
                            </li>
                        </Link>
                       <Link to="/" style={{ textDecoration: "none" }}>
                            <li className={classes.li}>
                                <LogoutIcon className={classes.icon} />
                                <span className={classes.span}>LogOut</span>
                            </li>
                        </Link>
                    </ul>
                </div>

            </div>

        )
    }
}

export default  withStyles(styleSheet)(Sidebar)