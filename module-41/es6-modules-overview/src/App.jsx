import { useEffect, useState } from 'react'

import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  // const watches = [
  //   {id:1, name: 'Apple watch', price:250},
  //   {id:2, name: 'Samsu watch', price:200},
  //   {id:3, name: 'MI watch', price:150}
  // ]



  // const watches = [
  //   {
  //     "id": 1,
  //     "name": "Apple Watch Series 7",
  //     "price": 399.99
  //   },
  //   {
  //     "id": 2,
  //     "name": "Samsung Galaxy Watch 4",
  //     "price": 349.99
  //   },
  //   {
  //     "id": 3,
  //     "name": "Fitbit Sense",
  //     "price": 299.95
  //   },
  //   {
  //     "id": 4,
  //     "name": "Garmin Forerunner 945",
  //     "price": 599.99
  //   },
  //   {
  //     "id": 5,
  //     "name": "Fossil Gen 5 Carlyle",
  //     "price": 249.00
  //   }
  // ]

  const [watches, setWatches] = useState([]);

  useEffect(()=>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])

  return (
   <>
     
      <h1>React</h1>
      {
        watches.map(watch =><Watch key={watch.id} watch={watch}></Watch>)

      }
      
      
     
     
    </>
  )
}

export default App
