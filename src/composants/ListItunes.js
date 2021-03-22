import React from "react";
import Music from "./Music";
import {CardColumns} from 'react-bootstrap';

const ListItunes = ({ response }) => {
     // destructuration
     
   const {results, resultCount}=response;

    return(

        <CardColumns>

           {
               response.results.map((x,i)=>{
                   return <Music key={i}{...x}/>
               })
           }

           </CardColumns>
    )

}

export default ListItunes;