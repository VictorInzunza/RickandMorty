import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorMessage from './components/ErrorMessage'
import LocationFilter from './components/LocationFilter'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'
import getRandomNumber from './utils/getRandomNumber'
import logo from "./assets/Photos/logo.svg"

function App() {
  const [location, setLocation] = useState()
  const [locationName, setLocationName] = useState()
  const [showError, setShowError] = useState()

  const getDataDimension = (idDimension) => {
    if (idDimension) {
      const URL = `https://rickandmortyapi.com/api/location/${idDimension}`
      axios.get(URL)
        .then(res => setLocation(res.data))
        .catch(err => {
          setShowError(true)
          setTimeout(() => {
            setShowError(false)
          }, 2000)
          console.log(err)
        })
    } else {
      alert("Inserte un valor")
    }
  }

  useEffect(() => {
    const randomDimension = getRandomNumber()
    getDataDimension(randomDimension)
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    const dimensionSearch = event.target.searchValue.value
    getDataDimension(dimensionSearch)
  }

  const handleChangeInput = (event) => {
    setLocationName(event.target.value)
  }

  const getNewLocation = (URL) => {
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">

      <fragment className="head"><img className='logo' src={logo} alt="" />
        <form onSubmit={handleSubmit}>
          <input id="searchValue" type="text"
            onChange={handleChangeInput}
            placeholder="Search your dimension" />
          <button type="submit" className='button-search'>Search</button>
          {
            showError ? <ErrorMessage /> : ""
          }

        </form></fragment>
      {
        locationName ? <LocationFilter locationName={locationName} getNewLocation={getNewLocation} /> : ""
      }

      <LocationInfo location={location} />




      <ResidentList location={location} />
    </div>
  )
}

export default App
