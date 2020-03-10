import React, { useState } from "react";
import Login from "./Login";
import Registraition from "./Registraition";

function LandingPage(){
  
  const [isUser, setIsUser] = useState(true);


 

    return isUser ? (
      <div>
        <div>
        <Login isUser = {isUser} setIsUser = {setIsUser}/>
        
        </div>
      </div>
    ) : (
      <Registraition isUser = {isUser} setIsUser = {setIsUser} />
    );
  }

export default LandingPage;
