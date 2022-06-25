import { Button } from '@mui/material';
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import "./addm.css"

export default function Addm() {
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
    const  [env,setenv]=useState("");
    const [tel,settel]=useState(0);
    const [epd,setepd]=useState("");
    const [te,sette]=useState("");
    const [fm,setfm]=useState("");
    const [imgp,setimgp]=useState("");
    const [mobj,setmobj]=useState("");
    const [mmtl,setmmtl]=useState("");
    const [uriv,seturiv]=useState("");
   
   
const  add_mponument=async()=>{
    await axios
    .post('https://apidourbya.herokuapp.com/api/v1/monument',{
        geom:String(geom),
        nom_monument:String(nomm),
        latitude_monument:String(lat),
        longitude_monument:String(long),
        statut_monument:String(statut),
        importance_monument:String(imp),
        accessibilite_monument:String(acc),
        relief:String(relf),
        adresse_monument:String(adr),
        description_monument:String(desc),
        
        affect:String(affect),
        etat_conservation:cons,
        duree_visite:drv,
        telephone_site:tel,
        epoque_dominante:String(epd),
      
        troisieme_epoque:String(te),
        fonction_monument:String(fm),
        image_panoramique:String(imgp),
        modele_obj:String(mobj),
        modele_mtl:String(mmtl),
        uri_video:String(uriv)
    })
    .then( 
        
        console.log("ajout effectuer")
);

}
console.log(nomm)
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
          <input type="text" placeholder="longitude" onChange={(e)=>setlong(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>latitude</label>
          <input type="text" placeholder="latitude" onChange={(e)=>setlat(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>accessibilité Monument</label>
          <select className="newUserSelect" name="active" id="active">
          <option value="" onChange={(e)=>setacc(e.target.value)}></option>
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
            <input type="radio" name="Relif" id="escalier" value="escalier" onChange={(e)=>setrelf(e.target.value)}/>
            <label for="other">escalier</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>statut Monument</label>
          <select className="newUserSelect" name="active" id="active" onChange={(e)=>setstatut(e.target.value)}>
          <option value=""></option>
            <option value="Ouvert">Ouvert</option>
            <option value="Ferme">Ferme</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>importance Monument</label>
          <select className="newUserSelect" name="active" id="active" onChange={(e)=>setimp(e.target.value)}>
            <option value=""></option>
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
          <input type="text" placeholder="époque moins visible" onChange={(e)=>setenv(e.target.value)} />
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
        <button className="newUserButton" onClick={add_mponument()}>Create</button>
      </form>
    </div>
  )
}
