import React from "react";
import { FormControl} from 'react-bootstrap';
   
const Search = ({search, setSearch ,handlekeyDown}) => {
 
   return(
        <FormControl
         placeholder="Search"
         value={search}
         onKeyPress={handlekeyDown}
         onChange={(x)=>setSearch(x.target.value)}
         aria-label="Search"
    />
   )

}

export default Search;
   
   
   
   