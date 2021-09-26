import React from 'react';
import './SelectedCeo.css';


const SelectedCeo = (props) => {
    const { name, img } = props.hiredCeo;

    return (
        <div >
            <div className='selected-ceo'>
                <div >
                    <img className='ceo-image' src={img} alt="" />
                </div>
                <div className='name'>
                    <h5>{name}</h5>
                </div>
            </div>

        </div>
    );
};

export default SelectedCeo;