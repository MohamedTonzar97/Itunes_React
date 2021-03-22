import React from "react";
import { Card,CardBody,CardImg,CardFooter,CardTitle,CardText} from 'reactstrap';
import {Link} from "react-router-dom";

function Music(
  
  {
     artistName,
     trackCensoredName,
     previewUrl,
     artworkUrl100
}) {

return(
  <Link to={'/itunes/:nomTrack'}>
  <Card className="Card" hoverable>
     <CardImg  src={artworkUrl100}  alt="Card image cap"  style={{ height: '17rem' }} />
        <CardBody>
        <CardTitle tag="h5">{artistName}</CardTitle>
        <CardText>
            <small className="text-muted">  {trackCensoredName}  </small>
          </CardText>
        </CardBody>
      
      <CardFooter>
        <audio controls>
              <source src={previewUrl} type="audio/mpeg" />
          </audio>
      </CardFooter>
  </Card>
</Link>
  
         
   )
}

export default Music;