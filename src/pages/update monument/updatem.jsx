import { Button } from '@mui/material';
import React,{useState,useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import "./updatem.css"
import axios from 'axios';
export default function Updatem() {
  const [geom,setgeom]=useState(""); 
  const [nomm,setnomm]=useState("");
  const [long,setlong]=useState(0);
  const [lat,setlat]=useState(0);
  const [statut,setstatut]=useState("");
  const [imp,setimp]=useState("");
  const [acc,setacc]=useState("");
  const [relf,setrelf]=useState("");
  const [adr,setadr]=useState("");
  const [desc,setdesc]=useState("");
    const [arrIds,setarrIds]=useState([]);
    const [monumentSelected,setMonumentSelected]=useState([])



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
const update_m =()=>{
 if (geom !=='') {
 axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${monumentSelected.id}`,{
  geom:geom
 }); 
 } 
 else if (nomm!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${monumentSelected.id}`,{
    nom_monument:nomm
   });  
 }
 else if (long.toString!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${monumentSelected.id}`,{
    longitude_monument:long.toString
   });  
}
else if (lat.toString!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${monumentSelected.id}`,{
    latitude_monument:lat.toString
   });   
}
else if (statut!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${monumentSelected.id}`,{
    statut_monument:statut.toString
   });  
}
else if (imp!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${monumentSelected.id}`,{
    importance_monument:imp.toString
   });  
}
else if (acc!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${monumentSelected.id}`,{
    accessibilite_monument:acc
   });  
}
else if (relf!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${monumentSelected.id}`,{
    relif:relf
   });  
}
else if (adr!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${monumentSelected.id}`,{
    adresse_monument:adr
   });  
}
else if (desc!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${monumentSelected.id}`,{
    description_monument:desc
   });  
}
else if ((desc!=='')&&(adr!=='')&&(relf!=='')&&(acc!=='')&&(imp!=='')&&(statut!=='')&&(lat.toString!=='')&&(long.toString!=='')&&(nomm!=='')&&(geom !=='')) {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${monumentSelected.id}`,{
    geom:geom ,
    nom_monument:nomm,
    longitude_monument:long.toString,
    latitude_monument:lat.toString,
    statut_monument:statut.toString,
    importance_monument:imp.toString,
    accessibilite_monument:acc,
    relif:relf,
    adresse_monument:adr,
    description_monument:desc,
   });  
}
}



console.log(arrIds)
  return (
    <div className='newUser'>
<DataGrid
      rows={monument}
      columns={columns}
      checkboxSelection
      onSelectionModelChange={(ids) => {
        const selectedIDs = new Set(ids);
        const selectedRowData = monument.filter((monument) =>
          selectedIDs.has(monument.id.toString())
        );
        
        setMonumentSelected(selectedRowData)
        console.log(monumentSelected)
        
      }}
     /> 
     <div className="newUser">
      <h1 className="newUserTitle">Update Monument</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>geom</label>
          <input type="text" placeholder="geom" onChange={(e)=>setgeom(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Nom Monument</label>
          <input type="text" placeholder="Nom Monument" onChange={(e)=>setnomm(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>longitude</label>
          <input type="number" placeholder="longitude" onChange={(e)=>setlong(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>latitude</label>
          <input type="number" placeholder="latitude" onChange={(e)=>setlat(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>accessibilité Monument</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="normal" onChange={(e)=>setacc(e.target.value)}>normal</option>
            <option value="reduite" onChange={(e)=>setacc(e.target.value)}>reduite</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Address monument </label>
          <input type="text" placeholder="adresse monument" value={adr} onChange={(e)=>setadr(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Relif</label>
          <div className="newUserGender">
            <input type="radio" name="Relif" id="haut" value="haut" onChange={(e)=>setrelf(e.target.value)} />
            <label for="male">haut</label>
            <input type="radio" name="Relif" id="bas" value="bas" onChange={(e)=>setrelf(e.target.value)} />
            <label for="female">bas</label>
            <input type="radio" name="Relif" id="escalier" value="other" onChange={(e)=>setrelf(e.target.value)}/>
            <label for="other">escalier</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>statut Monument</label>
          <select className="newUserSelect" name="active" id="active" onChange={(e)=>setstatut(e.target.value)}>
            <option value="Ouvert">Ouvert</option>
            <option value="Ferme">Ferme</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>importance Monument</label>
          <select className="newUserSelect" name="active" id="active" onChange={(e)=>setimp(e.target.value)}>
            <option value="principal" >principal</option>
            <option value="secondaire">secondaire</option>
          </select>
        </div> 
        <div className="newUserItem">
          <label>Description monument </label>
          <input type="text" placeholder="Description monument" onChange={(e)=>setdesc(e.target.value)} />
        </div>
        <button className="newUserButton" onClick={update_m} >update</button>
      </form>
    </div>
    </div>
  )
}
/**
 * 
 * @todo: click on update btn => redirect to anoth page for edit*
 * route http://localhost:3000/monument/${monumentSelected.id}
 * then passing props(monumentSelected) to the new page of edit
 */
