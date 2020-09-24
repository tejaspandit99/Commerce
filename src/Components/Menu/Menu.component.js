import React from "react"
import "./Menu.component.scss"
const Menu =({ title,imageUrl,size}) =>

<div className={`${size} menu-item`}>
<div className="background-image Large"
       style={{
           backgroundImage:`url(${imageUrl})`
        }} ></div>
            
        <div className="content">
    <h1 className="tittle">{title.toUpperCase()}</h1>
    <span className="subtitles">Buy for free</span>
     </div>
</div>

          

 
export default Menu;