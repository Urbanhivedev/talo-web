import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import Homepage from "./pages/homepage/Homepage";
import Bookings from "./pages/bookings/Bookings";
import Propertylist from "./pages/propertylist/Propertylist";
import Propertyview from "./pages/propertyview/Propertyview";
import Usertable from "./pages/usertable/Usertable";
import Propertytable from "./pages/propertytable/Propertytable";

import "./app.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  return (
     <>
      <Topbar/>
   
      
  
      <div className="container">
     
      
      {/*<div className="others">*/}
      <Router >
      <Sidebar/>
         <Routes>
           <Route  path="/" element={<Homepage/>} />
           <Route  path="/properties" element={<Propertylist/>} />
           
           <Route  path= "/bookings" element ={<Bookings/>} />
           <Route  path= "/propertyview" element ={<Propertyview/>} />
           <Route  path= "/admin/userlist" element ={<Usertable/>} />
           <Route  path= "/admin/propertylist" element ={<Propertytable/>} />
         </Routes>
       </Router>
       </div> 


     {/*</div> */}
    

    </>
  );
}

export default App;
