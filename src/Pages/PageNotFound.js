import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
       
        <div className="erro" >
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to="/">Back to the homepage...</Link>
        </div>
     
    );
}

export default PageNotFound;