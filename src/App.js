
import React from 'react';
import './App.css';
import Homepage from "./Page/homepage.component";

import {Route} from "react-router-dom";

const Hatspage= () => (
  <div>
<h1 style={{color:"red"}} >Homepage 
</h1>

</div>
);

function App() {
 return(
  <div>
  <Route exact path="/" component={Homepage}></Route>
  <Route path="/hats" component={Hatspage}></Route>
  
  </div>
 )
}

export default App;

