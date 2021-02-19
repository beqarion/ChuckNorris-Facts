import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Background from '../img/norris.jpg'

function App() {

  const [ url, setUrl ] = useState('')
  const [ fact, setFact ] = useState({})


  return (
    <div className="sans-serif contain bg-left bg-center-l" style={{backgroundImage: `url(${Background})`}}>
      <div className="bg-black-80 vh-100" >
      <Header />
        <div className="tc-ns">
          
        </div>
      </div>
    </div>
  )
}

export default App;
