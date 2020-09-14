import React from "react";
import "./component.css";

const SearchResults = ({results})=>{
 
        return(
            results.map((ele)=>{
               return <ul key={ele._id}>
                  <li>{ele.name}</li>
                  <li>{ele.price}</li>
                  </ul>
           })
          
        ) 

}

export default SearchResults;