import React from "react";
import Login from "./Login";

const isLoggedIn = false;

function App() {
  return (
    <div className="container">
      { isLoggedIn ? <h1>Hello</h1> : <Login className="form" /> }
    </div>
  );
}

export default App;

// function renderHorForm() {
//   if (isLoggedIn) {
//     return <h1>Hello</h1>
//   } else {
//     return (
//       <Login className="form"/>
//     )
//   }
// }