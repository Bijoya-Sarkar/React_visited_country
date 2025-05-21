import React, { use, useState } from 'react';
import Country from '../country/country';
import './countries.css'


const countries = ({countriesPromise}) => {
    const [visitedCountries,setVisitedCountries] = useState([])
    const [visitedflags,setVisitedflags] =useState([]);
    const countries = use(countriesPromise);

    const handleVisitedFlag = (flag) => {
        console.log('flag is added', flag);
    }
    
    const handleVisitedCountries = (country) =>{
        console.log('country visited to be added',country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }
    return (
        <div>
            <h1>Traveling countries:{countries.length}</h1>
            <h3>Traveled so far:{visitedCountries.length}</h3>
        
            <div className='countries'>
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlag = {handleVisitedFlag}
                    
                    country={country}></Country>)
            }
            </div>
            
        </div>
    );
};

export default countries;