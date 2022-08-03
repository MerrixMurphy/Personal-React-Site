import React from 'react';
import Planet from "../utils/components/Planet";

function NotFound() {
    const path = window.location.pathname.slice(1)
    const planet404 = {
        name: "Error 404",
        description: "The planet \"" + path + "\" is not in my registry. Please check the pathname or try again later.",
        id: "Error 404",
        last_pushed: "Error 404",
        status: "Error 404"
      }

    return (
        <div className="mainContent">
            <h2>How Exciting! Looks like you discovered a New planet!</h2>
        <div key={planet404.id} >
          <h2>Planet Number: {planet404.id}</h2>
          <div className="flex">
          <Planet/>
          </div>
          <div>
          <p>Project Name: {planet404.name}</p>
          <p>Supports Life: {planet404.status}</p>
          <p>Last update: {planet404.last_pushed}</p>
          <p>{planet404.description}</p>
          </div>
        </div>
        </div>
    );
}

export default NotFound;
