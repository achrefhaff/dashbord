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
        latitude_monument:lat,
        longitude_monument:long,
        statut_monument:statut,
        importance_monument:imp,
        accessibilite_monument:acc,
        relief:relf,
        adresse_monument:adr,
        description_monument:desc,
        
    })
    .then( res => {
        console.log(res)
        console.log("ajout effectuer")
});

}
  return (
    <div className='maind'>
      <div className="userTitleContainer">
          <h1 className="userTitle">Add Monuments</h1>
          </div> 
          <div className="nomth">
                  <label>geom</label>
                  <input
                    type="text"
                    placeholder="geom :"
                    className="userUpdateInput"
                    value={geom}
                    onChange={(e)=>setgeom(e.target.value)}
                  />
                </div> 
                <div className="nomth">
                  <label>Nom Monument</label>
                  <input
                    type="text"
                    placeholder="Nom Monument"
                    className="userUpdateInput"
                    value={nomm}
                    onChange={(e)=>setnomm(e.target.value)}
                  />
                </div>
                <h3>longitude</h3> 
      <input type="number"
        placeholder='longitude'
        className='userUpdateInput'
        value={long}
        onChange={(e)=>setlong(e.target.value)}
        
        />
          <h3>latitude</h3> 
      <input type="number"
        placeholder='latitude'
        className='userUpdateInput'
        value={lat}
        onChange={(e)=>setlat(e.target.value)}
        />




                <div className="nomth">
                  <label>statut Monument</label>
                  <input
                    type="text"
                    placeholder="statut Monument"
                    className="userUpdateInput"
                    value={statut}
                    onChange={(e)=>setstatut(e.target.value)}
                  />
                </div>

                <div className="nomth">
                  <label>importance Monument</label>
                  <input
                    type="text"
                    placeholder="importance Monument"
                    className="userUpdateInput"
                    value={imp}
                    onChange={(e)=>setimp(e.target.value)}
                  />
                </div>

                <div className="nomth">
                  <label>accecibilité Monument</label>
                  <input
                    type="text"
                    placeholder="accecibilité Monument"
                    className="userUpdateInput"
                    value={acc}
                    onChange={(e)=>setacc(e.target.value)}
                  />
                </div>

                <div className="nomth">
                  <label>relif Monument</label>
                  <input
                    type="text"
                    placeholder="relif Monument"
                    className="userUpdateInput"
                    value={relf}
                    onChange={(e)=>setrelf(e.target.value)}
                  />
                </div>


                <div className="nomth">
                  <label>adresse Monument</label>
                  <input
                    type="text"
                    placeholder="adresse Monument"
                    className="userUpdateInput"
                    value={adr}
                    onChange={(e)=>setadr(e.target.value)}
                  />
                </div>
                <div className="nomth">
                  <label>description Monument</label>
                  <input
                    type="text"
                    placeholder="description Monument"
                    className="userUpdateInput"
                    value={desc}
                    onChange={(e)=>setdesc(e.target.value)}
                  />
                </div>
                <Button className='button'>ajouter </Button>
                 
                
    </div>
  )
}
