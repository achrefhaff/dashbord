import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom"; 


//icons
import PlaceIcon from '@mui/icons-material/Place';
import ForumIcon from '@mui/icons-material/Forum';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

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
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
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
              <ForumIcon className="sidebarIcon" />
              Feedback
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
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">update</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}