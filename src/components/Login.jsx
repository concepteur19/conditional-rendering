import React from "react";
import Input from "./Input";
import Button from "./Button";

function Login(props) {
  return (
    <div>
      <form className={props.className}>
        <Input type="text" placeHolder="Username" />
        <Input type="password" placeHolder="Password" />
        <Button types="submit" />
      </form>
    </div>
  );
}

export default Login;
