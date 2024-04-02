import { useState} from "react"
import Mobilenav from "./mobilenav";
import Nav from "./nav";

export default function Contact(props){
    

   return(
        <>
          <div id="fondo">
           <Nav/>

           <Mobilenav current={"/contact"}/>
             
          <div id="condata">
            <div>
              <p className="condataName">Phone number</p>
              <p id="number">+593 980615630</p><br/>
            </div>

            <div>
             <p className="condataName">Email</p>
             <p  id="email">danielfrancisco99@outlook.com</p><br/>
            </div>

            <div>
             <p className="condataName">Github</p>
             <p  id="loc">https://github.com/danielfrancisco</p>
            </div>

          </div>

          </div>

        </>
        );
}