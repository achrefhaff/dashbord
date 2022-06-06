import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState,useEffect} from "react";
import axios from "axios";
export default function UserList() {
  //--------------------------data-------------------------
  const [users,setUsers]=useState([]);
  //--------------------state for celected id----------------
  const [Ids,setIds]=useState([]); 
  const URl="https://apidourbya.herokuapp.com/api/v1/user/"+Ids[0];
  console.log(URl)
  useEffect(() => {
      fetch("https://apidourbya.herokuapp.com/api/v1/users")
        .then((users) => users.json())
        .then((users) => setUsers(users))
    }, [])
  const handleDelete = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };
const updateuser =async()=>{
  await axios.put(URl,{
    is_admin:true
  })

}
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    
    { field: "email_utilisateur", headerName: "Email", width: 200 },
    {
      field: "nom_utilisateur",
      headerName: "Nom",
      width: 120,
    },
    {
      field: "prenom_utilisateur",
      headerName: "Prenom",
      width: 160,
    },
    {
      field:"is_admin",
      headerName :"Admin",
      width :120 


    },
    {
      field: "photo_utilisateur",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src="data:image/png;base64,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"  alt="" />
            {params.row.nom_utilisateur}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            
              <button className="userListEdit" onClick={updateuser()} >set Admin</button>
          
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
    
     <div className="userList"> 
       <DataGrid
         rows={users}
         disableSelectionOnClick
         columns={columns}
         pageSize={8}
         checkboxSelection
         onSelectionModelChange={(ids)=>{
           setIds(ids);
         }}
       />
     </div>
//     <div className="container">
// <div className="table-responsive">
//     <div className="table-wrapper">
//         <div className="table-title">
//             <div className="row">
//                 <div className="col-xs-5">
//                     <h2>User <b>Management</b></h2>
//                 </div>
//                 <div className="col-xs-7">
//                     <a href="/" className="btn btn-primary"><i className="material-icons">&#xE147;</i> <span>Add New User</span></a>
//                     <a href="/" className="btn btn-primary"><i className="material-icons">&#xE24D;</i> <span>Export to Excel</span></a>						
//                 </div>
//             </div>
//         </div>
//         <table className="table table-striped table-hover">
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Name</th>						
//                     <th>Date Created</th>
//                     <th>Role</th>
//                     <th>Status</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td><a href="/"><img src="/examples/images/avatar/1.jpg" className="avatar" alt="Avatar"/> Michael Holz</a></td>
//                     <td>04/10/2013</td>                        
//                     <td>Admin</td>
//                     <td><span className="status text-success">&bull;</span> Active</td>
//                     <td>
//                         <a href="/" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
//                         <a href="/" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE5C9;</i></a>
//                     </td>
//                 </tr>
                
//             </tbody>
//         </table>
//         <div className="clearfix">
//             <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
//             <ul className="pagination">
//                 <li className="page-item disabled"><a href="/">Previous</a></li>
//                 <li className="page-item"><a href="/" className="page-link">1</a></li>
//                 <li className="page-item"><a href="/" className="page-link">2</a></li>
//                 <li className="page-item active"><a href="/" className="page-link">3</a></li>
//                 <li className="page-item"><a href="/" className="page-link">4</a></li>
//                 <li className="page-item"><a href="/" className="page-link">5</a></li>
//                 <li className="page-item"><a href="/" className="page-link">Next</a></li>
//             </ul>
//         </div>
//     </div>
// </div>        
// </div>     
  );
}