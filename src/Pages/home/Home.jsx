import "./home.css"
import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo";
import Chart from "../../Components/Chart/Chart";
import WidgetSm from "../../Components/Widget1/WidgetSm";
import WidgetLg from "../../Components/Widget2/WidgetLg";
import Featuredorder from "../../Components/Orders/Orders";


export default function Home() {
    return (
        <div className = "home">
           <FeaturedInfo />
           <Chart/>
           <span className="homeWidgets">
           <WidgetSm/>
               <WidgetLg/>
               <Featuredorder />
               
           </span>
        </div>
    )
}
