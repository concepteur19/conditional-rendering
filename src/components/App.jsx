import React from "react";
import Form from "./Form";

let userIsRegistred = false;

function App() {
  return (
    <div className="container">
      <Form 
        isRegistered = { userIsRegistred }
      />
    </div>
  );
}

export default App; 