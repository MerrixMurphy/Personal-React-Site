import React from "react"

function Home(repos) {
  repos = repos.repos.sort()
      return (
        <div>
          <h2>Hi! I'm Merrix Murphy</h2>
          <h3>I am a Full Stack Web Developer and graduate of Thinkful and UNLV.</h3>
          <h4>I currently work for UST as a contractor for Intel.</h4>
          <h3>Check out my newest projects here!</h3>
      {repos.length > 0 ? repos.map((element) => {
        return (
          <div key={element.id}>
            <h4>{element.name}</h4>
            <h5>{element.description}</h5>
            <h6>{element.html_url}</h6>
          </div>
        )
      }) : (<h4>No Repos</h4>)}
      </div>
)}

export default Home;
