import React,{useState} from 'react'
import axios from 'axios';
import "./ajouterc.css"
//counter 
import Counter from '../../components/counter/counter'
export default function Ajouterc() { 
  const [nomt,setnomt]=useState('');
  const [desct,setdesct]=useState('');
  const [cadt,setcadt]=useState('');
  const [kilom,setkilom]=useState('');
  const [duree,setduree]=useState('');
  const [deplo,setdeplo]=useState(''); 
  const [depla,setdepla]=useState('');

 
  const addThematique=async()=>{
             await axios
             .post("http://localhost:8000/api/v1/thematique", {
          nom_thematique:nomt,
     			description_thematique:desct,
     			nbr_etape:2,
     			kilometrage:kilom,
     			duree:duree,
     			depart_longitude_circuit:deplo,
     			depart_latitude_circuit:depla,
     			categorie_thematique:cadt
             })
             .then( res => {
               console.log(res)
             });
         }
         const handleDelete =()=>{
           
         }
  return (
    <div className='addroute'>
      <div className="userTitleContainer">
          <h1 className="userTitle">Add cercuit</h1>
          </div>  
          <div className="nomth">
                  <label>Nom Thematique</label>
                  <input
                    type="text"
                    placeholder="Nom Thematique:"
                    className="userUpdateInput"
                    value={nomt}
                    onChange={(e)=>setnomt(e.target.value)}
                  />
                </div>  
                <div className="descth">
                  <label>Description Thematique</label>
                  <input
                    type="text"
                    placeholder="Description Thematique"
                    className="userUpdateInput"
                    value={desct}
                    onChange={(e)=>setdesct(e.target.value)}
                  />
                </div>  
                <div className="descth">
                  <label>Categorie Thematique</label>
                  <input
                    type="text"
                    placeholder="Categorie Thematique"
                    className="userUpdateInput" 
                    value={cadt}
                    onChange={(e)=>setcadt(e.target.value)}
                  />
                </div>  
                <div className='nbr_etages'>
                    <label>Nombre d'etages</label>
                   <Counter 
                   
                   />
                </div> 
                <div className='kilometrage'> 
                <label>kilometrage</label>
                <input
                    type="text"
                    placeholder="kilometrage"
                    className="userUpdateInput"
                    value={kilom}
                    onChange={(e)=>setkilom(e.target.value)}
                  />
                

                </div> 

                <div className='Duree'> 
                <label>Duree</label>
                <input
                    type="text"
                    placeholder="Duree"
                    className="userUpdateInput" 
                    value={duree}
                    onChange={(e)=>setduree(e.target.value)}
                  />
                </div> 


                <div className='Duree'> 
                <label>Depart longitude</label>
                <input
                    type="text"
                    placeholder="Depart longitude"
                    className="userUpdateInput"
                    value={deplo}
                    onChange={(e)=>setdeplo(e.target.value)}
                  />
                </div>


                <div className='Duree'> 
                <label>Depart latitude</label>
                <input
                    type="text"
                    placeholder="Depart latitude"
                    className="userUpdateInput"
                    value={depla}
                    onChange={(e)=>setdepla(e.target.value)}
                  />
                </div>
                <div className='pressb'>
                <button className="userUpdateButton" onClick={addThematique}>Ajouter cercuit</button> 
                </div> 
    </div>
  )
}
