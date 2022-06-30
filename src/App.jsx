import { useState, useEffect } from 'react'
import Select from 'react-select'

function App() {
 
  /**
  * Variabel Dinamis 
  * dengan menggunakan useState
  */
  const [datas, setDatas] = useState([])
  const [userSelect, setUserSelect] = useState("")
  const [isShow, setIsShow] = useState(false)

  /** 
  * Fetch API
  * Menggunakan Asyncronous
  */

  const getBerries = async() => {
    const berries  = await fetch("https://pokeapi.co/api/v2/berry/")
    const value    = await berries.json()

    const result = value.results.map(data => {
      
      return {
        label: data.name,
        value: data.name
      }
    })

    setDatas(result.sort((a,b) => a.label.localeCompare(b.label)))
  }

  /** 
  * Tampilkan Data di awal Loading
  * Menggunakan useEffect
  */

  useEffect(() => {

    getBerries()

  }, [])

  const handleSubmit = () => {
    setIsShow(state => !state)
  }

  const handleChange = (value) => {
    setUserSelect(value)

  }


  /** 
  * HTML/JSX
  * Pengaplikasian pada JSX
  */

  return (
      <div className="App">
        <h1>{isShow ? userSelect : ""}</h1>
        <button onClick={() => handleSubmit()} disabled={!userSelect}> {isShow ? "Hide Button" : "Show Values"}</button>
        <br />
        <br />
        <Select options={datas} onChange={(e) => handleChange(e.value) }></Select>
      </div>
    
  )
}

export default App
