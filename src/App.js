
import React from 'react';
import './App.css';
import Homepage from "./Page/homepage.component";

import {Route} from "react-router-dom";

function App() {
  return(
   <div>
   <Route exact path="/Commerce1/" component={Homepage}></Route>
   <Route path="/Commerce1/hats" component={Hatspage}></Route>
   
   </div>
  )
 }

const Hatspage= () => (
  <div>
<h1 style={{color:"red"}} >Homepage 
</h1>

</div>
);



export default App;

