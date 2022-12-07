import React,{useState} from 'react';
import SlideContent from '../slideContent/SlideContent';
import Prodact from '../prodact/prodactData';
import {Link} from 'react-router-dom'

function Content() {
   const [pro , setPro] = useState(Prodact);
  
    return (
        <>
          {pro.map((prod) => (
            <Link to={`/${prod.id}`}>
               <SlideContent {...prod} key={prod.id}/>
            </Link>
          ))}  
        </>
    );
}

export default Content;
