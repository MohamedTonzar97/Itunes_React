import React from "react";
import { Card,CardBody,CardImg,CardFooter,CardTitle,CardText} from 'reactstrap';

function DetailsMusic(
  
  {
     artistName,
     trackCensoredName,
     previewUrl,
     artworkUrl100,
     collectionName
}) {

return(
  
      <Card className="Card">
     <CardImg  src={artworkUrl100}  alt="Card image cap"  style={{ height: '17rem' }} />
        <CardBody>
        <CardTitle tag="h5">{artistName}</CardTitle>
        <CardText>
            <small className="text-muted">  {trackCensoredName}  </small>
          </CardText>
          <CardText>
            <small className="text-muted">  {collectionName}  </small>
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

export default DetailsMusic;