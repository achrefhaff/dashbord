import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect} from 'react'
import { DeleteOutline } from "@material-ui/icons";
import axios from 'axios';
import Piechart from '../../components/piechart/piechart';
import "./feedback.css"
export default function Feedback() {
    const [feedback,setFeedback]=useState([]);
  useEffect(() => {
      axios.get(`https://apidourbya.herokuapp.com/api/v1/feedbacks`)
      .then(res => {
          setFeedback(res.data)
      })
    }, []) ;  
    console.log(feedback[0])
    
    const handleDelete = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id));
      };
      const columns = [ { field: "id", headerName: "ID", width: 90 },
      { field: "message" ,headerName:"Massege",width:150},
      { field: "createdAt" ,headerName:"Creation date",width:150}, 
      { field: "emojie_reaction" ,headerName:"Rate",width:80},
      { field: "UtilisateurId" ,headerName:"user code",width:80},
      {
        field: "photoOrVideo",
        headerName: "feedback image",
        width: 400,
       
        renderCell: (params) => {
          return (
            <div >
              <img  src={params.row.photoOrVideo}  alt="" />
              
            </div>
          );
        }  
      },
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
    <div className='feedbacklist'>                                                                       
      <DataGrid 
      columns={columns}
      disableSelectionOnClick
        rows={feedback}
        pageSize={8}
        checkboxSelection/> 
    </div>
  )
}
