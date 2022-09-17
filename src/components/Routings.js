// Routings module
import React from 'react'

// component Nesting into Routings
import Home from './mainmenu/Home.js'
import About from './mainmenu/About.js'
 import Contact from './mainmenu/Contact.js'
 import Service from './mainmenu/Service.js'

 import Restapi from './mainmenu/Restapi.js'
 import View from './mainmenu/RESTAPI/View.js'
 import Edit from './mainmenu/RESTAPI/Edit.js'
 import Reactbootstrap from './mainmenu/Reactbootstrap.js'
 import Signup from './mainmenu/Signup.js'
// Routings package
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
// Routings setup
function Routings() {
    return(
    <BrowserRouter>
   

        {/* Links for menu */}
        <Link to="/home">Home</Link> &nbsp;&nbsp;
        <Link to="/about">About</Link> &nbsp;&nbsp;
        <Link to="/contact">Contact</Link> &nbsp;&nbsp;
        <Link to="/service">Service</Link> &nbsp;&nbsp;
        <Link to="/restapi">Restapi</Link> &nbsp;&nbsp;
        <Link to="/rb">RB</Link> &nbsp;&nbsp;
        <Link to="/signup">SignUp</Link>
        
        <Routes>
    {/* <Home/> */}
    <Route path="/*" element={<Home/>}/>

    {/* <About/> */}
    <Route path="/about" element={<About/>}/>
     {/* <Contact/> */}
     <Route path="/contact" element={<Contact/>}/>
      {/* <Service/> */}
    <Route path="/service" element={<Service/>}/>

       {/* <Restapi/> */}
       <Route path="/restapi" element={<Restapi/>}/>
        {/* <view/> */}
        <Route path="/restapi/view/:idno" element={<View/>}/>
         {/* <edit/> */}
         <Route path="/restapi/edit/:idno" element={<Edit/>}/>
         {/* <Reactbootstrap/> */}
         <Route path="/rb" element={<Reactbootstrap/>}/>
         {/* signup */}
         <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
 )
}
export default Routings;