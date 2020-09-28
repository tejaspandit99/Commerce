import React from "react"
import "./Menu.component.css"
import "./Menu.component.scss"
import {withRouter} from "react-router-dom"
const Menu =({ title,imageUrl,size,match,history,link}) =>

<div style={(size=="large")?{height:"380px"}:{height:"240px"}} className="menu-item" 
  onClick={()=> history.push(`${match.url}${link}`)}>
 <div className="background-image"
       style={{
           backgroundImage:`url(${imageUrl})`
        }} />
        <div className="content">
    <h1 className="tittle">{title.toUpperCase()}</h1>
    <span className="subtitles">Buy now</span>
     </div>
</div>

          

 
export default withRouter(Menu);