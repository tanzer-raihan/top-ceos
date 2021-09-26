import React from 'react';
import './Ceo.css'

const Ceo = (props) => {
    const { name, company, age, nationality, img, Salary } = props.ceo;
    return (
        <div>
            <div className='card'>
                <img className='ceo-img' src={img} alt="" />
                <p>Name: {name}</p>
                <p>Company: {company}</p>
                <p>Nationality: {nationality}</p>
                <p>Age: {age}</p>
                <p>Salary: {Salary}</p>
                <button 
                className='hire-btn' 
                onClick={()=>props.handleClicked(props.ceo)}
                ><i className="fas fa-user-check"></i> Hire Him</button>
                <div className='icon-container'>
                <span><i className="fab fa-linkedin icon"></i></span>
                <span><i className="fab fa-twitter-square icon"></i></span>

                </div>

            </div>
        </div>
    );
};

export default Ceo;