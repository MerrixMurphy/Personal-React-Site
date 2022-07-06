import React from "react"

function Home(repos) {
  repos = repos.repos.sort()
      return repos.length > 0 ? repos.map((element) => {
        return (
          <div key={element.id}>
            <h4>{element.name}</h4>
            <h5>{element.description}</h5>
            <h6>{element.html_url}</h6>
          </div>
        )
      }) : (<h4>No Repos</h4>)
}

export default Home;
