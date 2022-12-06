import React from 'react'

const EarthResult = () => {
    return (
        <ul className='earth-result'>
            {
                locationsOptions?.map(locationOption => <li onClick={() => getNewLocation(locationOption.url)} key={locationOption.url}>{locationOption.name}</li>)
            }
        </ul>
    )
}

export default EarthResult