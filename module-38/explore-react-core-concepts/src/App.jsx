import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  
  const actors = ['Uttam Kumer', 'Razzak', 'Jashim', 'Rubel'];

  const books = [
    {id: 1, name: 'Physics', price: 100},
    {id: 2, name: 'Math', price: 120},
    {id: 3, name: 'Chemistry', price: 130},
    {id: 4, name: 'Biology', price: 150},
  ]

  const singers = [
    {id:1, name: 'Dr. Mahfuzur Rahman', age: 68},
    {id:2, name: 'Eva Rahman', age: 38},
    {id:3, name: 'Shuvro Dev', age: 58},
    {id:4, name: 'Pritom', age: 28}
  ]
  return (
    <>
     
      <h1>Vite + React</h1>

      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={"Bappa Raj"}></Actor>
      {actors.map(actor => <Actor name={actor}></Actor>)}


     
      {/* <ToDo 
        task="Learn React" 
        isDone={true}></ToDo>
      <ToDo 
        task="Core Concepts" 
        isDone={false}></ToDo>
      <ToDo 
        task="Try JSX" 
        isDone={true}></ToDo> */}

      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="Watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score='99'></Student>
      <Student grade={12} score='85'></Student>
      <Student></Student>
      <Developer></Developer> */}

      
     
    </>
  )
}

function Device(props){
    return <h2>This Device: {props.name} price:{props.price} </h2>
}

function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'sakib', age:12}
  return <h3>I am {person.name} with age: {age + money}</h3>
}

// const {grade, score} = {grade: '7', score:'99'}
function Student({grade=1, score=0}){
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class:{grade}</p>
      <p>Score:{score}</p>
    </div>
  )
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return(
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
