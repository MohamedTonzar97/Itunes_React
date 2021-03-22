import React from "react";
import { Card,CardBody,CardImg,CardFooter,CardTitle,CardText} from 'reactstrap';
import {Link} from "react-router-dom";

function Music(
  
  {
     artistName,
     trackCensoredName,
     previewUrl,
     artworkUrl100
}

) {

return(
  <Card className="Card" >
     <CardImg  src={artworkUrl100}  alt="Card image cap"  style={{ height: '15rem' }} />
        <CardBody>
        <CardTitle tag="h5" style={{ height: '2rem' }}>{artistName}</CardTitle>
        <CardText style={{ height: '2rem' }}>
            <small className="text-muted">  {trackCensoredName}  </small>
          </CardText>
        </CardBody>
      
      <CardFooter>
        <audio controls>
              <source src={previewUrl} type="audio/mpeg" />
          </audio>
      </CardFooter>
  </Card>

  
         
   )
}

export default Music;