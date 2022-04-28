import  './thematique.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
export default function Thematique() {
    const [thematiques,setthematiques]=useState([]);
  useEffect(() => {
      axios.get(`http://localhost:8000/api/v1/thematiques`)
      .then(res => {
        setthematiques(res.data)
      })
    }, []) ;  
    const handleDelete =()=>{
           
    }
    //console.log(thematiques)  
    const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "nom_thematique" ,headerName:"nom thematique",width:150},
    { field: "categorie_thematique" ,headerName:"categorie thematique",width:150},
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            
              
          
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    }, 
  ];

  return (
    <div className='thematiques'> 
        <DataGrid
        rows={thematiques}
        columns={columns}
        checkboxSelection />
    </div>
  )
}
