import React, { useEffect, useState } from 'react';
import './Ceos.css'
import Ceo from '../Ceo/Ceo';
import Hire from '../Hired Ceo/Hire';

const Ceos = () => {
    const[clickedCeo,setClickedCeo]=useState([]);
   
    const handleClicked=(ceo)=>{
        const added=[...clickedCeo,ceo]
      setClickedCeo(added);
    }
    

    const [ceos, setCeos] = useState([]);
    useEffect(() => {
        fetch('./ceo.JSON')
            .then(res => res.json())
            .then(data => setCeos(data))
    }, [])

    return (
        <div className='container'>
            <div className='ceo-container'>
              
                {
                    ceos.map(ceo => <Ceo
                        key={ceo.id}
                        ceo={ceo}
                        handleClicked={handleClicked}
                    ></Ceo>)
                }
            </div>
            <div className='cart'>
              <Hire hired={clickedCeo}></Hire>
            </div>
        </div>
    );
};

export default Ceos;