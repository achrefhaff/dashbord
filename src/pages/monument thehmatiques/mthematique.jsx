import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Link} from "react-router-dom";
import"./mthemaique.css"
export default function Mthematique() {
const [mthematiques,setmthematiques]=useState([]);
const [thematiques,setthematiques]=useState([]);
  useEffect(() => {
      axios.get(`http://localhost:8000/api/v1/monum_thematiques`)
      .then(res => {
        setmthematiques(res.data)
      })

    }, []) ;

  useEffect(() => {
      axios.get(`http://localhost:8000/api/v1/thematiques`)
      .then(res => {
        setthematiques(res.data)
      })
    }, []) ; 
 const columns = [
    { field: "id", headerName: "ID", width: 350 },
    { field: "nom_thematique" ,headerName:"nom thematique",width:150},
    { field: "categorie_thematique" ,headerName:"categorie thematique",width:150}];
    const columns1 = [
        { field: "id", headerName: "ID", width: 350 },
        { field: "ThematiqueId" ,headerName:"id cercuit",width:350},
        { field: "MonumentId" ,headerName:"id Monument",width:350}, 
        {field :"nomMonument" ,headerName:"Nom monument" ,width:120}, 
        {field :"nomCircuit" ,headerName:"Nom Cercuits" ,width:120}

    ];    

  return (
    <div className='thematique'>
      <Link to="/addc">
        <button  className='button'>cree cercuit</button>
        </Link>
        <h1>Cercuits thematiques</h1>
        <DataGrid
        rows={thematiques}
        columns={columns}
        checkboxSelection /> 
        <h1>Monuments thematiques</h1>
        <DataGrid
        rows={mthematiques}
        columns={columns1}
        checkboxSelection />
      
    </div>
  )
}
