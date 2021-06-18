import Navbar from "./Components/navbar/Navbar";
import Sidebar from "./Components/sidebar/Sidebar";
import Home from "./Pages/home/Home";
import "./app.css";


function App() {
  return (
    <div className="App">
     <Navbar/>
     
     <div className ="container">
       <Sidebar />
       <Home />
     </div>
    
    </div>
  );
}

export default App;
