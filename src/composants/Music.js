import React from "react";


function Music({
     artistName,
     trackCensoredName,
     previewUrl,
     artworkUrl100
}) {

return(
    <div>
    <image src={artworkUrl100} className="img-fluid" alt="Responsive image" />
    <h6 className="card-subtitle mb-2 text-muted"> {artistName}</h6>
    <p className="card-text">   {trackCensoredName}   </p>
    <audio controls>
     <source src={previewUrl} type="audio/mpeg" />
    </audio>
    </div>
)

}

export default Music;