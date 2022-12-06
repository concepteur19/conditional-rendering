import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <div>
      <form className= "form" >
        <Input type="text" placeHolder="Username" />
        <Input type="password" placeHolder="Password" />
        {!props.isRegistered && <Input type="password" placeHolder="Confirm Password" /> }
        <button type="submit"> 
          {props.isRegistered ? "Login" : "Register" } 
        </button>
      </form>
    </div>
  );
}

export default Form;
