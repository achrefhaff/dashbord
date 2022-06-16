import { Button } from '@mui/material';
import React,{useState,useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import "./updatem.css"
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
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                
                  <button className="userListEdit"  >update</button>
              
                <DeleteOutline
                  className="userListDelete"
                  
                />
              </>
            );
          },
        },
    ]




console.log(arrIds)
  return (
    <div className='maind'>
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
      <div className="userTitleContainer">
          <h1 className="userTitle">update Monuments</h1>
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
                <Button className='button' >update </Button>
                 
                
    </div>
  )
}
/**
 * 
 * @todo: click on update btn => redirect to anoth page for edit*
 * route http://localhost:3000/monument/${monumentSelected.id}
 * then passing props(monumentSelected) to the new page of edit
 */
