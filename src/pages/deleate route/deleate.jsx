import React,{useState,useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import "./deleate.css"
import { Button } from '@mui/material';
export default function Deleate() {
    const [arrIds,setarrIds]=useState([]);
    const [thematiques,setthematiques]=useState([]);
    useEffect(() => {
        axios.get(`https://apidourbya.herokuapp.com/api/v1/monum_thematiques`)
        .then(res => {
            setthematiques(res.data)
        })
  
      }, []) ;
//--------------------------------------------------------------------------------------
console.log(arrIds);
const deleate=()=>{
    axios.delete(`https://apidourbya.herokuapp.com/api/v1/monum_thematique/${arrIds}`);
}
//-------------------------------------------------------------------------------------
      const columns = [
        { field: "id", headerName: "ID", width: 350 },
        { field: "ThematiqueId" ,headerName:"id cercuit",width:350},
        { field: "MonumentId" ,headerName:"id Monument",width:350}, 
        {field :"nomMonument" ,headerName:"Nom monument" ,width:120}, 
        {field :"nomCircuit" ,headerName:"Nom Cercuits" ,width:120}

    ];    
  return (
    <div className='main'>
     <DataGrid
     rows={thematiques} 
     columns={columns} 
     checkboxSelection
     onSelectionModelChange={(ids)=>{
         setarrIds(ids);
     }}
     /> 
   
     <Button className='button' onClick={deleate()} >deleate</Button>
     
    </div>
  )
}
