import "./order.css"
import {ArrowUpwardOutlined,ArrowDownwardOutlined} from '@material-ui/icons';
import foodtech1 from "../Orders/a.jpg";
import foodtech2 from "../Orders/b.jpg";
import foodtech3 from "../Orders/c.jpg";
import foodtech4 from "../Orders/d.jpg";



export default function Featuredorder() {
    return (
        <div className="chart">
            <span className="MainTitle">Trending Orders</span>
        <div className = "featured">
            <div className="featuredItem">
            <span > <img src = {foodtech1} width ={150} height ={100} className="logo"/></span>
            <span className="featuredTitle">Chicken Salad</span>

            <div className="featuredMoneyConatainer">
                <span className="featuredMoney">$35.00</span>
                
            </div>
            </div>
            
            <div className="featuredItem">
            <span > <img src = {foodtech2} width ={150} height ={100} className="logo"/></span>
            <span className="featuredTitle">Vege Salad</span>
            <div className="featuredMoneyConatainer">
                <span className="featuredMoney">$30.00</span>
              
            </div>
           
            </div>
            <div className="featuredItem">
            <span > <img src = {foodtech3} width ={150} height ={100} className="logo"/></span>
            <span className="featuredTitle">Soup</span>
            <div className="featuredMoneyConatainer">
                <span className="featuredMoney">$45.00</span>
                
            </div>
            
            </div>
            <div className="featuredItem">
            <span > <img src = {foodtech4} width ={150} height ={100} className="logo"/></span>
            <span className="featuredTitle">Sushi</span>
            <div className="featuredMoneyConatainer">
                <span className="featuredMoney">$32.00</span>
                
            </div>
           
            
            </div>
        </div>
        </div>
    )
}
