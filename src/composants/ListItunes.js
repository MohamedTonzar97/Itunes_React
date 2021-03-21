import React from "react";
import Music from "./Music";

const ListItunes = ({ response }) => {
     // destructuration
     
   const {results, resultCount}=response;

    return(

          <div>

           {
               response.results.map((x,i)=>{
                   return <Music key={i}{...x}/>
               })
           }

          </div>
    )

}

export default ListItunes;