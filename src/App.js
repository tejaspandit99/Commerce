
import React from 'react';
import './App.css';
import Homepage from "./Page/homepage.component";

import {Route} from "react-router-dom";



const Hatspage= () => (
  <div>
<h1 style={{color:"red"}} >Hats 
</h1>

</div>
);
function App() {
  return(
   <div>
   <Route exact path="/Commerce1" component={Homepage}></Route>
   <Route path="/Commerce1/hats" component={Hatspage}></Route>
   
   </div>
  )
 }



export default App;

