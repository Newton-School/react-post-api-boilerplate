import React, { useEffect, useState } from "react";

/**
 * @task : use this url , and send a post request with the body
 * url :  https://jsonplaceholder.typicode.com/posts
 * body: 'title=' + encodeURIComponent('My awesome new article') + '&body=' + encodeURIComponent('This is the text of my article')
 *@result : show the id of post created on the frontendl;
 */


const App = () => {
  const [state, setState] = useState({}); 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: 'title=' + encodeURIComponent('My awesome new article') + '&body=' + encodeURIComponent('This is the text of my article')
    }).then(function (response) {
          return response.json();
    }).then(function (data) {
            console.log(data); 
            setState((pre)=> data); 
    })
  }, [])
  return (
    <div className="App">
      <h2>{state["id"]}</h2>
    </div>
  )
}

export default App;