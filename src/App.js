import React from 'react'
import Navbar from './Components/Navbar/navbar'
import "./App.css"
import {originals,action, comedy, horror, romance, documentary} from './urls'
import Banner from './Components/Banner/Banner'
import RawPost from './Components/RawPost/Rawpost'
function App() {
  return (
    <div className='App'>
          <Navbar/>
          <Banner/>
          <RawPost url={originals} title='Netflix Originals'/>
          <RawPost url={action} title='Action' isSmall/>
          <RawPost url={comedy} title='Comedy' isSmall/>
          <RawPost url={horror} title='Horror' isSmall/>
          <RawPost url={romance} title='Romance' isSmall/>
          <RawPost url={documentary} title='Documentaries' isSmall/>

    </div>
  )
}

export default App
