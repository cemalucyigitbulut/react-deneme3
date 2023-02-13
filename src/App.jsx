import { useState } from 'react'
import './App.css'
import MoneyStuff from './MoneyStuff'
import AddItem from './AddItem'
import ItemDisplay from './ItemDisplay'
import "./New.css" ;

function App() {

  return (
    <>
    <div>
      <MoneyStuff/>
      <br />
      <AddItem/>
      <br />
    </div>
    </>
  )
}

export default App
