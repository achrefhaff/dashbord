import "./sidebar.css";
import {
  LineStyle,
 
  PermIdentity,
  DynamicFeed,
  ChatBubbleOutline,

} from "@material-ui/icons";
import { Link } from "react-router-dom"; 


//icons
import CommentIcon from '@mui/icons-material/Comment';
import PlaceIcon from '@mui/icons-material/Place';
import ForumIcon from '@mui/icons-material/Forum';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import DomainDisabledIcon from '@mui/icons-material/DomainDisabled';
import BuildIcon from '@mui/icons-material/Build';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
           
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/monuments" className="link">
              <li className="sidebarListItem">
                <PlaceIcon className="sidebarIcon" />
                Monuments
              </li>
            </Link>
            <Link to="/feed">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            </Link>
            <Link to="/contribution">
            <li className="sidebarListItem">
              <CommentIcon className="sidebarIcon" />
              contribution
            </li>
            </Link>
            <Link to="/thematiques">
            <li className="sidebarListItem">
              <AltRouteIcon className="sidebarIcon" />
              Route
            </li> 
            </Link>
          </ul> 
          
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Add</h3>
          <ul className="sidebarList">
            <Link to="/addc">
            <li className="sidebarListItem">
              <AddLocationAltIcon color="gray" className="sidebarIcon" />
              Add route
            </li> 
            </Link>
            <Link to="/addm">
            <li className="sidebarListItem">
              <AddBusinessIcon className="sidebarIcon" />
              add monuments
            </li>
            </Link>
          </ul>
        </div>
        <h3 className="sidebarTitle">update</h3>
        <Link to="deleate"> 
        <li className="sidebarListItem">
        <AltRouteIcon className="sidebarIcon" />
             deleate Route  
        </li>
        </Link>
        <Link to ="/update">
        <li className="sidebarListItem">
        <AltRouteIcon className="sidebarIcon" />
              Route index 
        </li>
        </Link>
        <Link to ="/delm">
        <li className="sidebarListItem">
        <DomainDisabledIcon className="sidebarIcon" />
              deleate monument 
        </li>
        </Link>
        <Link to ="/updm">
        <li className="sidebarListItem">
        <BuildIcon className="sidebarIcon" />
              update monuments 
        </li>
        </Link>
      </div>
    </div>
  );
}