import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, hanldeVisitedFlags}) => {
    console.log(country)
    const {name, flags, area, population, cca3
    } = country;

    const [visited, setVisited]= useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

  
   




    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'red' : 'green'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() =>
            handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={()=>hanldeVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            {visited? 'I have visited this country.' : 'I want to visit this country'}
            
        </div>
    );
};

export default Country;