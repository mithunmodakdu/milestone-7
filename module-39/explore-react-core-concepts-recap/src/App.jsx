import { useState } from 'react'
import './App.css'
import Posts from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>explore-react-core-concepts-recap</h2>
     <ol>
      <li>Components</li>
      <li>JSX</li>
      <li>Props</li>
      <li>Event handler</li>
      <li>State</li>
      <li>Effect: load data</li>
      
     </ol>
     <hr/>

     <Posts></Posts>
     
    </>
  )
}

export default App
