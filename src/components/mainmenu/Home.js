// Home.js module

 
import React,{Fragment} from 'react'



function Home() {

    // variable
    var title= "HOME COMPONENT"
    var para= `lorem In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate 
    the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be 
    used as a placeholder before final copy is available. It is also used to temporarily replace text in a
     process called greeking, which allows designers to consider the form of a webpage or publication, without 
     the meaning of the text influencing the design`
    return(<Fragment>
        <h1> {title}</h1>
      
         <p> {para}</p>

            
         </Fragment>
       
        )
}
export default Home;