import React from 'react'
import Folder from './components/Folder'
import { rootFolder } from './data/utitlity'
function App() {

  return (
    <div className=' w-1/3 mx-auto'>
      <Folder root={rootFolder}/>
    </div>
  )
}

export default App
