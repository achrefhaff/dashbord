import React,{useState,useEffect} from 'react'
import axios from 'axios';
import"./uthematique.css"
import { DataGrid } from '@mui/x-data-grid';
export default function Uthematique() {
  const [num,setnum]=useState(0);
  const [nomnom,setnomnom]=useState()//nom monument
  const [thnom,setthnom]=useState()//nom cercuit
   // ----------------get data---------------------
    const [thematiques,setthematiques]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/thematiques")
        .then(res => {
          setthematiques(res.data)
        })
      }, []) ;
       
      const [monument,setMonuments]=useState([]);
      
      useEffect(() => {
        axios.get("http://localhost:8000/api/v1/monuments")
        .then(res => {
          setMonuments(res.data)
        })
      }, []) ;
       
   //----------------------colonne de la table monument---------------------------
  
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
//-----------------------------table thematique-------------------------------------
const columns1 = [
  { field: "id", headerName: "ID", width: 350 },
  { field: "nom_thematique" ,headerName:"nom thematique",width:150},
  { field: "categorie_thematique" ,headerName:"categorie thematique",width:150}];



//----------------------------insersion -------------------------------------


 const addThematique=async()=>{
     await axios
     .post(`http://localhost:8000/api/v1/monum_thematique`, {
     ThematiqueId:toString( thnom[0].id),
       MonumentId: toString(nomnom[0].id),
       nomMonument: toString(nomnom[0].nom_monument),
       nomCircuit: toString(thnom[0].nom_thematique),
       

     })
     .then( res => {
       console.log(res)
     });
   }

  return (
    <div className='main'>
      <h1>table des monuments</h1> 
      <DataGrid
      rows={monument}
      columns={columns}
      checkboxSelection
      disableMultipleSelection={true}
      onSelectionModelChange={(ids) => {
        const selectedIDs = new Set(ids);
        const selectedRowData = monument.filter((monument) =>
          selectedIDs.has(monument.id.toString())
        );
        
        setnomnom(selectedRowData);
        
      }
      }
      
      />
      
      <h1>table thematiques</h1>
      <DataGrid 
      rows={thematiques} 
      columns={columns1} 
      checkboxSelection
      
      onSelectionModelChange={(ids) => {
        const selectedIDs = new Set(ids);
        const selectedRowData = thematiques.filter((thematiques) =>
          selectedIDs.has(thematiques.id.toString())
        );
        
        setthnom(selectedRowData);
      }} 
    
      />
      <h3>classement du monument</h3>
        <input type="number"
        placeholder='classification du monument'
        className='userUpdateInput'
        value={num}
        onChange={(e)=>setnum(e.target.value)}/>
      <button className='button' onClick={addThematique()}>ajouter</button>
      </div>
    
  )
}
