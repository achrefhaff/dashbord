import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import "./contribution.css"
export default function Contribution() {
    const [contribution,setcontribution]=useState([]);
    useEffect(() => {
        axios.get("https://apidourbya.herokuapp.com/api/v1/contributions")
        .then(res => {
            setcontribution(res.data)
        })
      }, []) ;
      //console.log(contribution) 
      const colums=[
      { field: "id", headerName: "id contribution ", width: 200 },
      { field: "text_contribution", headerName: "description contribution ", width: 200 },
      { field: "pdfFile", headerName: "fichier PDF", width: 200 },
      { field: "image_importe", headerName: "image importer", width: 800, height:800,
      renderCell: (params) => {
        return (
          <div >
            <img  src={params.row.image_importe}  alt="" />
            
          </div>
        );
      },}, 
      { field: "image_capture", headerName: "image capturer", width: 300, height:400,
      renderCell: (params) => {
        return (
          <div >
            <img  src={params.row.image_capture}  style={{width:300,height:400}} />
            
          </div>
        );
      },}];
  return (
    <div className='container'>
      <DataGrid
      rows={contribution}
      columns={colums}
      checkboxSelection
      disableMultipleSelection={true}
      /> 
    </div>
  )
}
