import {Component, Fragment} from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../component/navbar";
import bg from "../../assets/hero-background.jpg";


class HomePage extends Component{


    render(){
        let { classes } = this.props

        return(
            <Fragment>
                <div><Navbar /></div>
                
                <div className={classes.container} style={{ backgroundImage: `url(${bg})` }}>
                    <div className={classes.bodycontainer} >
               
                        <span style={{ color: `white`, fontSize: '18px ', zIndex: '5', marginTop:'25%'}}>
                       
                        </span>
                    
                        
                    </div>
             
                </div>

            </Fragment>
            
        )

    }

}

export default withStyles(styleSheet)(HomePage) 