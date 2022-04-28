import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function Mthematique() {
const [mthematiques,setmthematiques]=useState([]);
  useEffect(() => {
      axios.get(`http://localhost:8000/api/v1//monum_thematiques`)
      .then(res => {
        setmthematiques(res.data)
      })

    }, []) ;
    console.log(mthematiques)  
  return (
    <div>
      
    </div>
  )
}
