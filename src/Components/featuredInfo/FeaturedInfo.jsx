import "./featuredInfo.css"
import {ArrowUpwardOutlined,ArrowDownwardOutlined} from '@material-ui/icons';


export default function FeaturedInfo() {
    return (
        <div className = "featured">
            <div className="featuredItem">
            <span className="featuredTitle">Selles Graph</span>
            <span className="featuredMoneyRate"> <ArrowUpwardOutlined className ="featuredMoneyRate"/>2.2%</span>
            
           
            <div className="featuredMoneyConatainer">
                <span className="featuredMoney1">$2,132</span>
                
            </div>
            
                
                
            
            </div>
            
            <div className="featuredItem">
            <span className="featuredTitle">Total Visitors</span>
            <span className="featuredMoneyRate2"> <ArrowDownwardOutlined className ="featuredMoneyRate"/>2.2%</span>
            <div className="featuredMoneyConatainer">
                <span className="featuredMoney1">3,455</span>
              
            </div>
           
            </div>
            <div className="featuredItem">
            <span className="featuredTitle">New Users</span>
            <span className="featuredMoneyRate"> <ArrowUpwardOutlined className ="featuredMoneyRate"/>2.2%</span>
            <div className="featuredMoneyConatainer">
                <span className="featuredMoney1">4,342</span>
                
            </div>
            
            </div>
            <div className="featuredItem">
            <span className="featuredTitle">New Orders</span>
            <span className="featuredMoneyRate2"> <ArrowDownwardOutlined className ="featuredMoneyRate"/>2.2%</span>
            <div className="featuredMoneyConatainer">
                <span className="featuredMoney1">42,132</span>
                
            </div>
           
            
            </div>
        </div>
    )
}
