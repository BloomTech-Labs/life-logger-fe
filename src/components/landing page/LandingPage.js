import React, { useState } from "react";
import Login from "./Login";
import Registraition from "./Registraition";

function LandingPage(){
  
  const [isUser, setIsUser] = useState(true);


  const ToggleRegisterComponent = e => {
    setIsUser(false);
  };


    return isUser ? (
      <div>
        <Login />{" "}
        <button onClick={() => ToggleRegisterComponent()}>Or register here!</button>
      </div>
    ) : (
      <Registraition isUser = {isUser} setIsUser = {setIsUser} />
    );
  }

export default LandingPage;
