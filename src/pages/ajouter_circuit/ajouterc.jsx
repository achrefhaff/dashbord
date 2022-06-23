import React,{useState} from 'react'
import axios from 'axios';
import "./ajouterc.css"
//counter 
import Counter from '../../components/counter/counter'
export default function Ajouterc() { 
  const [nomt,setnomt]=useState('');
  const [desct,setdesct]=useState('');
  const [cadt,setcadt]=useState('');
  const [kilom,setkilom]=useState(0);
  const [duree,setduree]=useState('');
  const [deplo,setdeplo]=useState(0); 
  const [depla,setdepla]=useState(0);
  const [nbre,setnbre]=useState(0);
  console.log(nomt);
  console.log(desct); 
  console.log(cadt)
  console.log(kilom)
  console.log(duree)
  console.log(deplo)
  console.log(depla)
  const addThematique=async()=>{
    
             await axios
             .post('https://apidourbya.herokuapp.com/api/v1/thematique', {
          nom_thematique:nomt.toString(),
     			description_thematique:desct.toString,
     			nbr_etape:nbre,
     			kilometrage:kilom,
     			duree:duree,
     			depart_longitude_circuit:deplo,
     			depart_latitude_circuit:depla,
     			categorie_thematique:cadt
             })
             .then( res => {
               console.log(res)
               console.log("ajout effectuer")
             });
         }
        
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Ajoutr circuit</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>nom_thematique</label>
          <input type="text" placeholder="nom circuit thematique " value={nomt} onChange={(e)=>setnomt(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>description_thematique</label>
          <input type="text" placeholder="description thematique " value={desct} onChange={(e)=>setdesct(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>kilometrage</label>
          <input type="number" placeholder="nombre kilometrage circuit" value={kilom} onChange={(e)=>setkilom(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>depart_longitude_circuit</label>
          <input type="number" placeholder="depart longitude de circuit" value={deplo} onChange={(e)=>setdeplo(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>	nombre_etape</label>
          <input type="number" placeholder="nombre etape circuit " value={nbre} onChange={(e)=>setnbre(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>depart_latitude_circuit</label>
          <input type="number" placeholder="latitud circuit" value={depla} onChange={(e)=>setdepla(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>categorie_thematique</label>
          <input type="text" placeholder="categorie du circuit " value={cadt} onChange={(e)=>setcadt(e.target.value)} />
        </div>
        <button className="newUserButton" onClick={addThematique}>Ajoutre</button>
      </form>
    </div>
  )
}
