import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./Navbar.css";
import {MailOutline,NotificationsNone,Search} from '@material-ui/icons';
import foodtech from "../navbar/1.png";



export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div class = "navbar">
              
            <div class ="navbarWrapper">
                
                <div class ="navLeft">
                <span > <img src = {foodtech} width ={150} height ={35} className="logo"/></span>
                    
                    </div>
                    <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="Search?"/>
      <button type="submit" class="searchButton">
        <Search className = "icons"/>
     </button>
   </div>
</div>
    
                    <div className="navRight">
     
          <div className="navbariconsContainer">
            <MailOutline />
            <span className="naviconBadge "></span>
          </div>
          <div className="navbariconsContainer">
            <NotificationsNone />
            <span className="naviconBadge "></span>
          </div>
           <Button style={{ backgroundColor: 'transparent' } }  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className ="dropbtn">
  
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="imgAvatar" />
          </Button>
                <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>My Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>

      </Menu>
        </div>
      </div>
    </div>
  );
}