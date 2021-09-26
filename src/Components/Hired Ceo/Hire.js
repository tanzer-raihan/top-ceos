import React from 'react';
import './Hire.css';
import SelectedCeo from './SelectedCeo';

const Hire = (props) => {
    const hiredCeos=props.hired;
   let totalSalary=0;
   let name='';
    
 for(const hiredceo of hiredCeos){
     totalSalary=totalSalary+hiredceo.Salary;
    name=name+hiredceo.name;

     
 }
    return (
        <div>
           <div>
           <h3 className="user"> <i className="fas fa-user"></i> CEO Added: {hiredCeos.length} </h3>
               <h4 className='user'>Total Salary: ${totalSalary}</h4> 
           </div>

           <div>
               <div className='hired-ceos'>
                   <h3 className='added-person'>Added Person:</h3>
              {
                  hiredCeos.map(hiredCeo=><SelectedCeo 
                    key={hiredCeo.id}
                    hiredCeo={hiredCeo}
                    ></SelectedCeo>)
              }
               </div>
           </div>
        </div>
       
    );
};

export default Hire;