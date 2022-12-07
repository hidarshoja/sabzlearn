import React,{useState} from 'react';
import {useParams ,Navigate} from 'react-router-dom';
import prodactData from './component/prodact/prodactData';
import './component/Main.css';
import Button from '@mui/material/Button';

function MainPost() {

   let param = useParams();
   

  

   let MainPro = prodactData.find(post => post.id == param.postId);
   console.log(MainPro);


 


    return (
        
               
               <div id='boxKharid'>
                  <div className='boxImgDiv'>
                      <img src={MainPro.img}/>
                  </div>
                  <div className='boxParaDiv'>
                     <h3>{MainPro.title}</h3>
                     <p style={{direction: "rtl"}}>{MainPro.comment}</p>
                     <p style={{color:'red' , direction:'rtl'}}>{MainPro.price}<span style={{color:'black' ,paddingRight:'10px'}}>هزار تومان</span></p>
                     <Button variant="contained" color="success"> خرید دوره </Button>
                  </div>
               </div>
                
    );
}

export default MainPost;
























      
 

