import { Button } from '@mui/material';
import React,{useState,useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import "./updatem.css"
import axios from 'axios';
export default function Updatem() {
  const [geom,setgeom]=useState(""); 
  const [nomm,setnomm]=useState("");
  const [long,setlong]=useState("");
  const [lat,setlat]=useState("");
  const [statut,setstatut]=useState("");
  const [imp,setimp]=useState("");
  const [acc,setacc]=useState("");
  const [relf,setrelf]=useState("");
  const [adr,setadr]=useState("");
  const [desc,setdesc]=useState("");


    const [affect,setaffect]=useState("");
    const [cons,setcons]=useState(0);
    const [drv,setdrv]=useState(0);
    const [tel,settel]=useState(0);
    const [epd,setepd]=useState("");
    const [te,sette]=useState("");
    const [fm,setfm]=useState("");
    const [imgp,setimgp]=useState("");
    const [mobj,setmobj]=useState("");
    const [mmtl,setmmtl]=useState("");
    const [uriv,seturiv]=useState(""); 
    const  [env,setenv]=useState("");
    const [Ids,setIds]=useState([]);
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
 axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
  geom:geom
 }); 
 
 } 
 else if (nomm!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    nom_monument:String(nomm)
   });  
 }
 else if (long.toString!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    longitude_monument:String(long)
   });  
}
else if (lat.toString!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    latitude_monument:String(lat)
   });   
}
else if (statut!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    statut_monument:String(statut)
   });  
}
else if (imp!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    importance_monument:String(imp)
   });  
}
else if (acc!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    accessibilite_monument:String(acc)
   });  
}
else if (relf!==null) {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${(Ids)}`,{
    relif:String(relf)
   });  
}
else if (adr!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    adresse_monument:String(adr)
   });  
}
else if (desc!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    description_monument:String(desc)
   });  
}
else if (affect!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    affect:String(affect)
   });  
}
else if (cons!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    etat_conservation:cons
   });  
}
else if (drv!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    duree_visite:drv
   });  
}
else if (tel!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    telephone_site:tel
   });  
}
else if (epd!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    epoque_dominante:String(epd)
   });  
}
else if (te!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    epoque_moins_visible:String(te)
   });  
}
else if (fm!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    troisieme_epoque:String(fm)
   });  
}
else if (imgp!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    fonction_monument:String(imgp)
   });  
}
else if (mobj!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    modele_obj:String(mobj)
   });  
}
else if (mmtl!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    modele_mtl:String(mmtl)
   });  
}

else if (uriv!=='') {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    uri_video:String(uriv)
   });  
}

else if ((desc!=='')&&(adr!=='')&&(relf!=='')&&(acc!=='')&&(imp!=='')&&(statut!=='')&&(lat.toString!=='')&&(long.toString!=='')&&(nomm!=='')&&(geom !=='')) {
  axios.put(`https://apidourbya.herokuapp.com/api/v1/monument/${String(Ids)}`,{
    geom:geom ,
    nom_monument:String(nomm),
    longitude_monument:String(long),
    latitude_monument:String(lat),
    statut_monument:String(statut),
    importance_monument:String(imp),
    accessibilite_monument:String(acc),
    relif:String(relf),
    adresse_monument:String(adr),
    description_monument:String(desc),
   });  
}
}


console.log(Ids)
console.log(relf)
  return (
    <div className='newUser'>
<DataGrid
      rows={monument}
      columns={columns}
      checkboxSelection
      onSelectionModelChange={(ids)=>{
        setIds(ids);
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

        <div className="newUserItem">
          <label>affect</label>
          <select className="newUserSelect" name="active" id="active" onChange={(e)=>setaffect(e.target.value)}>
            <option value=""></option>
            <option value="public" >public</option>
            <option value="prive">prive</option>
            <option value="public et prive">public et prive</option>
          </select>
        </div> 
         {/* cons */}
        <div className="newUserItem">
          <label>Conservation </label>
          <input type="number" placeholder="Conservation monument" onChange={(e)=>setcons(e.target.value)} />
        </div>
        {/* drv */}
        <div className="newUserItem">
          <label>Dureé visite  </label>
          <input type="number" placeholder="Dureé visite monument" onChange={(e)=>setdrv(e.target.value)} />
        </div>
        {/* tel */}
        <div className="newUserItem">
          <label>Telephone Site  </label>
          <input type="number" placeholder="Telephone monument" onChange={(e)=>settel(e.target.value)} />
        </div>
        {/* epd */}
        <div className="newUserItem">
          <label>époque dominante </label>
          <input type="text" placeholder="Description monument" onChange={(e)=>setepd(e.target.value)} />
        </div>
        {/* emv */}
        <div className="newUserItem">
          <label>époque moins visible  </label>
          <input type="text" placeholder="Description monument" onChange={(e)=>setenv(e.target.value)} />
        </div>
        {/* te */}
        <div className="newUserItem">
          <label>troisieme époque </label>
          <input type="text" placeholder="Description monument" onChange={(e)=>sette(e.target.value)} />
        </div>
        {/* fm */}
        <div className="newUserItem">
          <label>Fonction monument  </label>
          <input type="text" placeholder="Description monument" onChange={(e)=>setfm(e.target.value)} />
        </div>
         {/* imgp */}
        <div className="newUserItem">
          <label>Image patrimoine   </label>
          <input type="text" placeholder="Description monument" onChange={(e)=>setimgp(e.target.value)} />
        </div>
        {/* mobj */}
        <div className="newUserItem">
          <label>Modele boj  </label>
          <input type="text" placeholder="Description monument" onChange={(e)=>setmobj(e.target.value)} />
        </div>
        {/* mmtl */}
        <div className="newUserItem">
          <label>Modele mtl  </label>
          <input type="text" placeholder="Description monument" onChange={(e)=>setmmtl(e.target.value)} />
        </div>
        {/* uriv */}
        <div className="newUserItem">
          <label>Uri video  </label>
          <input type="text" placeholder="Description monument" onChange={(e)=>seturiv(e.target.value)} />
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
