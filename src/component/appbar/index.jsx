import {Component} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import localStorageService from "../../services/StorageService";
import jwt_decode from "jwt-decode";


class AdminNavbar extends Component{

    constructor(props) {
        super(props);
        this.state = {
          userData: "",
        }
    }

    componentDidMount = async () =>{
      const token = await localStorageService.getItem("token");
      if (token){
        console.log(token);
        const decode = jwt_decode(token.token);
        console.log(decode.user);
        this.setState({
          userData: decode.user
        })
      }
       
    }

    
    render(){
      
    return (
      <Box sx={{ flexGrow: 1, backgroundColor: '#2c2c6d' }}>
      <AppBar position="static" sx={{backgroundImage: 'linear-gradient(to right top, #402baa, #3b39b6, #3546c1, #2e53cc, #255fd7)' }}>
        <Toolbar>
          <IconButton
              size="large"
              edge="start"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
          >
              <AccountCircle />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {this.state.userData}
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={1} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={2} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
}
export default  AdminNavbar