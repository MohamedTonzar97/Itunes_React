import React from "react";
import {fetchItunesSongs }from '../itunesService.js';
import { Button,InputGroup } from 'react-bootstrap';

const ButtonSearch = ({search, setResponse}) => {
 
   return(
   <InputGroup.Append>
      <Button variant="outline-secondary" 
                onClick={()=>
                    fetchItunesSongs(search).then(setResponse)
                    }
          >Rechercher</Button>
    </InputGroup.Append>
   )

}

export default ButtonSearch;




