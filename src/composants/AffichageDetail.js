import React from "react";
import Music from "./Music";
import {CardColumns} from 'react-bootstrap';

const AffichageDetail = ({ response }) => {
     // destructuration
     
   const {results, resultCount}=response;

    return(

        <CardColumns>

           {
               response.results.map((x,i)=>{
                   return <a key={i} href={'/itunes'}> </a>
               })
           }

           </CardColumns>
    )

}

export default AffichageDetail;