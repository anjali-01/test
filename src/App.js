import React from "react";
import Home from "./Home";
import Details from "./Details";

function App() {
  return (
     <div>
       <Home  name = "Daisy " id = "515" /> 
       <Home  name = "Sam"  id = "516" /> 
       <Details branch = "CSE" section = "A"  />
       <a href="#">Click here to know your UPDATES</a>
     </div>
  )
}

export default App
