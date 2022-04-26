import Tabbar from "./components/Tabbar/Tabbar";
import Sidebar from "./components/sidebar/sidebar";
import UserList from "./pages/usersList/UserList";

import "./app.css" 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/home/home"; 
import User from "./pages/user/user";
import Feedback from "./pages/feedback/Feedback";
import Monuments from "./pages/monuments/monuments";
import Thematique from "./pages/thematiques/thematique";
function App() {
  
  return (
    <Router>
      <Tabbar/> 
      <div className="container">
      <Sidebar/> 
      <Thematique/>
        <Switch>
          
        <Route path="/home" exact component={Home} />
        <Route path="/users" exact component={UserList} />   
        <Route path="/feed" exact component={Feedback} /> 
        <Route path="/monuments" exact component={Monuments} />     
        </Switch>
          
        
      </div>
    </Router>
  );
}

export default App;
