
import {DashboardOutlined,KeyboardArrowDownRounded,WidgetsOutlined,InsertDriveFileOutlined,SmartphoneOutlined,TableChartOutlined,MapOutlined,CreateOutlined,ChatBubbleOutlineOutlined, BarChartOutlined,InputOutlined,FormatPaintOutlined,CodeOutlined,FilterListOutlined,KitchenRounded,AssignmentIndOutlined,FormatListBulletedOutlined,DescriptionOutlined,PeopleOutlineOutlined,WorkOutlineOutlined, ArrowDownwardOutlined} from '@material-ui/icons';
import "./Sidebar.css";
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';




export default function Sidebar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className ="sidebar">
            <div className="sidebarWrapper"></div>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle"></h3>
            <ul className="sidebarList">
                <div>
                <Button style={{ backgroundColor: 'transparent' } }  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className ="dropbtn">

                <li className="siebarItem1 "><DashboardOutlined className="sidebarIcon"/> Dashboard <KeyboardArrowDownRounded className="sidebararrow"/></li>
                </Button>
                <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>FoodTech</MenuItem>
        
      </Menu>
                </div>
                <br></br>
                <li className="siebarItem"><KitchenRounded className="sidebarIcon"/> Menus</li>
                <br></br>
                <li className="siebarItem"><AssignmentIndOutlined className="sidebarIcon"/> Orders </li>
                <br></br>
                <li className="siebarItem"><FormatListBulletedOutlined className="sidebarIcon"/> Resturents List </li>
                <br></br>
                <li className="siebarItem"><DescriptionOutlined className="sidebarIcon"/> Invoice </li><br></br>
                <div>
                <Button style={{ backgroundColor: 'transparent' } }  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className ="dropbtn">
                <li className="siebarItem1"><PeopleOutlineOutlined className="sidebarIcon"/> Customers<KeyboardArrowDownRounded className="sidebararrow"/> </li>
                </Button>
                <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Inovoice Details</MenuItem>
        <MenuItem onClick={handleClose}>Invoice List</MenuItem>
        
      </Menu>
                </div>
                <br></br>
                <li className="siebarItem"><WorkOutlineOutlined className="sidebarIcon"/> Sales </li>
                <br></br>
                <li className="siebarItem"><WidgetsOutlined className="sidebarIcon"/> Widgets </li>
                <br></br>
                <li className="siebarItem"><FilterListOutlined className="sidebarIcon"/>All Orders</li>
                <br></br>
                <li className="siebarItem"><CodeOutlined className="sidebarIcon"/> Services </li>
                <br></br>
                <li className="siebarItem"><FormatPaintOutlined className="sidebarIcon"/> Edit Layout </li>
                <br></br>
                <li className="siebarItem"><InputOutlined className="sidebarIcon"/> Forms</li>
                <br></br>
                <li className="siebarItem"><BarChartOutlined className="sidebarIcon"/> Charts </li>
                <br></br>
                <li className="siebarItem"><TableChartOutlined className="sidebarIcon"/> Tables </li>
                <br></br>
                <li className="siebarItem">< ChatBubbleOutlineOutlined className="sidebarIcon"/> Popups </li>
                <br></br>
                <li className="siebarItem"><CreateOutlined className="sidebarIcon"/>Notes</li>
                <br></br>
                <li className="siebarItem"><MapOutlined className="sidebarIcon"/>Locations </li>
                <br></br>
                <li className="siebarItem"><InsertDriveFileOutlined className="sidebarIcon"/>Information page </li>
                <br></br>
                <li className="siebarItem"><InsertDriveFileOutlined className="sidebarIcon"/> Order Page </li>
                <br></br>
                <li className="siebarItem"><SmartphoneOutlined className="sidebarIcon"/> Mobile Share </li>
                <br></br>
            </ul>
            
        </div>
    )
}
