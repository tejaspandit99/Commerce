  import React from "react"
import Menu from "../Components/Menu/Menu.component"
import "./directory.scss"


  class Mydirectory extends React.Component
  {
      constructor()
      {
          super()
          this.state={
         sections : [
              {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                link:"Commerce1/hats"
                
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
               link:""
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
               link:""
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size:'large',
                id: 4,
                link:""
               
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                link:""
              
              }
            ]
            
          }
      }
      render(){ 
          return(
            <div className="directory-menu">
              {
            this.state.sections.map(({title,id,imageUrl,size,link}) =>
             (
            <Menu 
              key={id} title={title} imageUrl={imageUrl} size={size} link={link} />
              ))
                              
      }</div>
)
    }  

  }
  export  default Mydirectory
  
  