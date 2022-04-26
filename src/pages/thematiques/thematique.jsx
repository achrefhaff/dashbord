import  './thematique.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
export default function Thematique() {
    const [feedback,setFeedback]=useState([]);
  useEffect(() => {
      axios.get(`http://localhost:8000/api/v1/thematiques`)
      .then(res => {
          setFeedback(res.data)
      })
    }, []) ;  
    console.log(feedback) 
  return (
    <div>
      
    </div>
  )
}
