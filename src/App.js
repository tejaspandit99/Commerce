import { execPath } from 'process';
import React from 'react';
import './App.css';
import Homepage from "./Page/homepage.component";

import {Route,Link} from "react-router-dom";
import {Switch} from "react-router-dom"; 
const Hatspage= (props) => (
  <div>
<h1 style={{color:"red"}} >Homepage 
</h1>

</div>
);

function App() {
 return(
  <div>
  <Route  exact path="/" component={Homepage}></Route>
  <Route path="/hats" component={Hatspage}></Route>
  
  </div>
 )
}

export default App;

