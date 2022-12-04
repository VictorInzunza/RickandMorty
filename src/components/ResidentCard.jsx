import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({ urlResident }) => {
    const [resident, setResident] = useState()

    useEffect(() => {
        axios.get(urlResident)
            .then(res => {
                setTimeout(() => {
                    setResident(res.data)
                }, 2000)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <article className='resident-card'>

            <header className='resident-card-header'>
                <img className="resident-photo" src={resident?.image} alt="" />
                <div className='resident-card-status'>
                    <div className={`circle ${resident?.status}`}></div>
                    <span className='resident-card-status-name'>{resident?.status}</span>
                </div>
            </header>
            <fragment className={`specie ${resident?.species}`}>{resident?.species}   </fragment>
            <section className='resident-card-body'>
                <section className='character-name'>{resident?.name}</section>

                <ul>
                    <li>{resident?.origin.name}</li>
                </ul>
                <element className="episodes">{resident?.episode.length}</element>
                <span>Episodes</span>
            </section>
        </article>
    )
}

export default ResidentCard