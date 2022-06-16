import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material';
export default function Update() {
    const [thematiques,setthematiques]=useState([]);
    const [arrIds,setarrIds]=useState([]);
    const [num,setnum]=useState(0);
    useEffect(() => {
        axios.get(`https://apidourbya.herokuapp.com/api/v1/monum_thematiques`)
        .then(res => {
            setthematiques(res.data)
        })
  
      }, []) ;
      const columns = [
        { field: "id", headerName: "ID", width: 350 },
        { field: "ThematiqueId" ,headerName:"id cercuit",width:350},
        { field: "MonumentId" ,headerName:"id Monument",width:350}, 
        {field :"nomMonument" ,headerName:"Nom monument" ,width:120}, 
        {field :"nomCircuit" ,headerName:"Nom Cercuits" ,width:120},
        {field :"orderMonument" ,headerName:" orderMonument" ,width:90}

    ];    
console.log(arrIds)


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
     <h3>index Monument</h3> 
      <input type="number"
        placeholder='classification du monument'
        className='userUpdateInput'
        value={num}
        onChange={(e)=>setnum(e.target.value)}
        />
<Button>update</Button>
    </div>
  )
}

