import './App.css';
import React,{useEffect,useState} from "react";
import './itunesService.js';
import ListItunes from './composants/ListItunes.js';

function App() {
    const [search,setSearch] = useState('')
    const [response,setResponse]=  useState()

    useEffect(() => {
       if(!search)
     setResponse()
    }, [search])

    const handlekeyDown = (event) => {
      if(event.key == 'Enter')
            this.fetchItunesSongs(search).then(setResponse)
    }
    return (
      <div>
       <input
        type="text"
        placeholder="Search"
        value={search}
        onKeyPress={handlekeyDown}
        onChange={(x)=>setSearch(x.target.value)}
         />
      <button
        onClick={()=>
           this.fetchItunesSongs(search).then(setResponse)
        }
         type="button">
         </button>
        {response ? (
             <ListItunes response={response}/>
           ):(
           <div>
             <p>Aucun resultat</p>
           </div>
           )}
           </div>
    )
           }

export default App
