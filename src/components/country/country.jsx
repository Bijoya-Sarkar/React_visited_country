import React, { useState } from 'react';
import './country.css'

const country = ({country,handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false);
    //console.log(handleVisitedCountries);
    const handleVisited =() =>{
        if(visited === true){
            setVisited(false);
        }
        else{
            setVisited(true);
        }
        handleVisitedCountries(country);


    }
    
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name:{country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Independent:{country.independent ? 'Free': 'Not Free' }</p>
            <p>Population: {country.population}</p>
            <button className={visited ? 'btn-visited' : 'btn-not-visited'}
            onClick={handleVisited}>{
                visited ? 'visited' : 'Not visited'
                
                }</button>
                
            
        </div>
    );
};

export default country;