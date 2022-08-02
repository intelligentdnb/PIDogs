import './App.css';
import {Route, Switch} from "react-router-dom";
import Landing from "./Components/Landing/Landing.jsx";
import Home from './Components/Home/Home.jsx';
import DogsDetail from './Components/DogsDetails/DogsDetail';
import NavBar from './Components/NavBar/NavBar';
import CreateMyDog from "./Components/CreateDog/CreateMyDog";
//      

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/" component={NavBar}/>
      </Switch>
      <Route exact path="/home" component={Home}/>
      <Route path="/details/:id" component={DogsDetail}/>
      <Route exact path ="/dogcreate" component = {CreateMyDog}/>
    </div>
  );
}

export default App;
