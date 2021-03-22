import './App.css';
import React,{useEffect,useState} from "react";
import {fetchItunesSongs }from './itunesService.js';
import ListItunes from './composants/ListItunes.js';
import Search from './composants/Search.js';
import ButtonSearch from './composants/ButtonSearch';
import { InputGroup ,Card,Alert} from 'react-bootstrap';
// import DarkModeToggle from "react-dark-mode-toggle";
// import  {lightTheme, darkTheme }from './composants/theme';

function App() {
  
    const [response,setResponse]=  useState()
    const [search,setSearch] = useState('')

    useEffect(() => {
       if(!search)
     setResponse()
    }, [search])

    // const [isDarkMode, setIsDarkMode] = useState(() => false);
    const handlekeyDown = (event) => {
        if(event.key == 'Enter')
              fetchItunesSongs(search).then(setResponse)
      }
    return (
      
      <div  id="app" className="bg-dark text-white">
      <Card.Header style={{ textAlign: "center" }}><h1>Itunes Application</h1> </Card.Header>
      <div  className="d-flex justify-content-center" >
      
      <InputGroup className="mb-3" className="w-50 p-3">
      <Search setResponse={setResponse} setSearch={setSearch } handlekeyDown={handlekeyDown} />
      <ButtonSearch search={search} setResponse={setResponse} />
          {/* <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
          /> */}

      </InputGroup>
     </div>
      <InputGroup className="mb-3" className="w-100 p-3">
      {response ? (
             <ListItunes response={response}/>
           ):(
           <div>
           <Alert variant="success">
            <Alert.Heading>Aucun résultat !!</Alert.Heading>
            <p>S'il vous plait veuillez saisir d'autres resultat </p>
          </Alert>
           </div>
           )}
      </InputGroup>
   
      </div>
    )
}

export default App;
