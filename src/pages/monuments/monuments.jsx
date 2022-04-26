import {useState,useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Monumentinfo from '../../components/featureInfo/monumentinfo';
import "./monument.css"
export default function Monuments() { 
    const [monument,setMonuments]=useState([]); 
  useEffect(() => {
      fetch("http://localhost:8000/api/v1/monuments")
        .then((monument) => monument.json())
        .then((monument) => setMonuments(monument))
    }, [])  
    console.log(monument.length)
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
  return (
    <div className='monumentlist'>
        <Monumentinfo/>
      <DataGrid
      rows={monument}
      columns={columns}/>
    </div>
  )
}


