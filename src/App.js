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
import Deleate from "./pages/deleate route/deleate";
import Update from "./pages/update route/update";
function App() {
  
  return (
    <Router>
      <Tabbar/> 
      <div className="container">
      <Sidebar/> 
       
        <Switch>
         
        <Route path="/home"  component={Home} />
        <Route path="/users"  component={UserList} />   
        <Route path="/feed"  component={Feedback} /> 
        <Route path="/monuments"  component={Monuments} /> 
        <Route path="/thematiques"  component={Thematique} />  
        <Route path="/addu"  component={User}/> 
        <Route path="/addc"  component={Ajouterc}/>
        <Route path="/monumentt"  component={Mthematique} />
        <Route path="/updatet"  component={Uthematique} />
        <Route path="/contribution"  component={Contribution}/>
        <Route path="/deleate"  component={Deleate}/>
        <Route path="/update" component={Update}/>

        </Switch>
          
        
      </div>
    </Router>
  );
}

export default App;
