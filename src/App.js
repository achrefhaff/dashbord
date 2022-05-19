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
//---------------pages-----------------
import Home from "./pages/home/home"; 
import User from "./pages/user/user";
import Feedback from "./pages/feedback/Feedback";
import Monuments from "./pages/monuments/monuments";
import Thematique from "./pages/thematiques/thematique";
import Ajouterc from "./pages/ajouter_cercuit/ajouterc";
import Mthematique from "./pages/monument thehmatiques/mthematique";
import Uthematique from "./pages/thematiques update/uthematique";
import Contribution from "./pages/contribution/contribution";
function App() {
  
  return (
    <Router>
      <Tabbar/> 
      <div className="container">
      <Sidebar/> 
       
        <Switch>
         
        <Route path="/home" exact component={Home} />
        <Route path="/users" exact component={UserList} />   
        <Route path="/feed" exact component={Feedback} /> 
        <Route path="/monuments" exact component={Monuments} /> 
        <Route path="/thematiques" exact component={Thematique} />  
        <Route path="/addu" exact component={User}/> 
        <Route path="/addc" exact component={Ajouterc}/>
        <Route path="/monumentt" exact component={Mthematique} />
        <Route path="/updatet" exact component={Uthematique} />
        <Route path="/contribution" exact component={Contribution}/>
        </Switch>
          
        
      </div>
    </Router>
  );
}

export default App;
