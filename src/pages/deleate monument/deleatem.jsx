import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
export default function Deleatem() {

    const [arrIds,setarrIds]=useState([]);



    const [monument,setMonuments]=useState([]); 
  useEffect(() => {
      fetch("https://apidourbya.herokuapp.com/api/v1/monuments")
        .then((monument) => monument.json())
        .then((monument) => setMonuments(monument))
    }, [])  


    const columns = [
        { field: "id", headerName: "ID", width: 200 },
        
        { field: "nom_monument", headerName: "Monument name", width: 170 },
        {
          field: "latitude_monument",
          headerName: "monument latitude ",
          width: 120,
        },
        {
          field: "longitude_monument",
          headerName: "monument longitude",
          width: 160,
        },
        { field: "horaire_ouverture_ete", headerName: "open in summer ", width: 90 },
        { field: "horaire_fermeture_ete", headerName: "colse in summer", width: 90 },
        { field: "horaire_ouverture_hiver", headerName: "open in winter", width: 90 },
        { field: "horaire_fermeture_hiver", headerName: "colse in winter", width: 90 }, 
        { field: "epoque_dominante", headerName: "dominant period", width: 90 },
    ]

    const deleate=()=>{
        axios.delete(`https://apidourbya.herokuapp.com/api/v1/monument/${arrIds}`);
    }

  return (
    <div className='main'>
     <DataGrid
      rows={monument}
      columns={columns}
      checkboxSelection
     onSelectionModelChange={(ids)=>{
         setarrIds(ids);
     }}
     /> 
     <Button onPaste={deleate()}>delete</Button> 
    </div>
  )
}
