import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
const Logo=()=>{
return(
    <Tilt className="mt0 mb0 ma4 Tilt shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
    <div className="Tilt-inner">
        <img src={brain} className="pa2" />
    </div>
   </Tilt>
);
}

export default Logo;