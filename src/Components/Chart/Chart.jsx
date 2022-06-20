import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    "Active User": 4000,
  },
  {
    name: 'Feb',
    "Active User": 2000,
  },
  {
    name: 'Mar',
    "Active User": 1000,
  },
  {
    name: 'Apr',
    "Active User": 5000,
  },
  {
    name: 'May',
    "Active User": 4000,
  },
  {
    name: 'June',
    "Active User": 3000,
  },
  {
    name: 'July',
    "Active User": 1000,
  },
  {
    name: 'Aug',
    "Active User": 2000,
  },
  {
    name: 'sep',
    "Active User": 5000,
  },
  {
    name: 'Oct',
    "Active User": 1000,
  },
  
  {
    name: 'Nov',
    "Active User": 2000,
  },
  {
    name: 'Dec',
    "Active User": 4000,
  },
  
  
  
];
export default function Chart() {
    return (
        <div className ="chart">
            <h3 className="chartTitle">Sales Analitycs</h3>
            <ResponsiveContainer width = "100%" aspect ={4/1}>
                <LineChart data = {data}> 

                <XAxis dataKey ="name" stroke ="#5550bd" />
                <Line type ="monotone" dataKey ="Active User" stroke ="#5550bd"/>
                <Tooltip />
                    
                </LineChart>

            </ResponsiveContainer>
            
        </div>
    )
}
