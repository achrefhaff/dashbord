import { Button } from '@mui/material';
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import "./addm.css"

export default function Addm() {
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
const add_mponument=async()=>{
    await axios.post(`https://apidourbya.herokuapp.com/api/v1/monument`,{
        geom:geom,
        nom_monument:nomm,
        latitude_monument:lat.toString,
        longitude_monument:long.toString,
        statut_monument:statut.toString,
        importance_monument:imp.toString,
        accessibilite_monument:acc.toString,
        relief:relf.toString,
        adresse_monument:adr.toString,
        description_monument:desc.toString,
        
    })
    .then( res => {
        console.log(res)
        console.log("ajout effectuer")
});

}
console.log(relf)
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Ajouter Monument</h1>
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
        <button className="newUserButton" onClick={add_mponument}>Create</button>
      </form>
    </div>
  )
}
