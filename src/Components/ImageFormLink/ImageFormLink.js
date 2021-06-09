import React from 'react';
import './style.css';
const ImageFormLink=({onInputChange,onButtonSubmit})=>{
return(
    <div>
       <p className='f3'> 
           This will detect face.
       </p>
       <div className="form">
           <div className="extra pa4 br3 shadow-5">
           <input type="text" className="f4 pa2 w-70" onChange={onInputChange} />
           <button className="grow w-30 f4 link bg-light-purple white pv2 ph3 dib" 
           onClick={onButtonSubmit}>Detect</button>
           </div>
           
       </div>
    </div>
);
}

export default ImageFormLink;