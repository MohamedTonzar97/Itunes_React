import React from 'react'
import {Link} from "react-router-dom";


export default function pageNotFound() {
    return (
        <div>
            <h1> PAGE NOT FOUND</h1>
            {/* <Redirect to="/itunes" /> */}
            <Link to="/itunes">Back to home</Link>
        </div>
    )
}
