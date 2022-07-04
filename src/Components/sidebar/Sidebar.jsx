
import {DashboardOutlined,KeyboardArrowDownRounded,WidgetsOutlined,InsertDriveFileOutlined,SmartphoneOutlined,TableChartOutlined,MapOutlined,CreateOutlined,ChatBubbleOutlineOutlined, BarChartOutlined,InputOutlined,FormatPaintOutlined,CodeOutlined,FilterListOutlined,KitchenRounded,AssignmentIndOutlined,FormatListBulletedOutlined,DescriptionOutlined,PeopleOutlineOutlined,WorkOutlineOutlined, ArrowDownwardOutlined} from '@material-ui/icons';
import "./Sidebar.css";
import React from 'react';
import { Link } from 'react-router-dom';
import react, { useState, useEffect } from 'react';






export default function Sidebar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [click, setClick] = useState(false);
  

  
  const closeMobileMenu = () => setClick(false);


 
    return (
        <div className ="sidebar">
            <div className="sidebarWrapper"></div>
            <div className="sidebarMenu"></div>
            <h3 className="sidebarTitle"></h3>
            <ul className="sidebarList">
                <div>
               
                <Link to ="/" className="link">
                <li className="siebarItem "><DashboardOutlined className="sidebarIcon"/> Dashboard </li>
                </Link>
                </div>
                <br></br>
              <Link to ="/menus" className="link">
                <li className="siebarItem"><KitchenRounded className="sidebarIcon"/> Menus</li>
                </Link>
                <br></br>
             <Link to="/table" className="link">
                <li className="siebarItem"><AssignmentIndOutlined className="sidebarIcon"/> Orders </li>
                </Link>
                <br></br>
                <Link to="/rlist" className="link">
                <li className="siebarItem"><FormatListBulletedOutlined className="sidebarIcon"/> Resturents List </li>
                </Link>
                <br></br>
                <Link to="/invo" className="link">
                <li className="siebarItem"><DescriptionOutlined className="sidebarIcon"/> Invoice </li>
                </Link>
                <br></br>
                <div>
                <Link to="/cust" className="link">
                <li className="siebarItem"><PeopleOutlineOutlined className="sidebarIcon"/> Customers</li>
                </Link>
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
