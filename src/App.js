import './App.css';

//REACT ROUTER DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// VIEWS
import Productos from "./Views/Productos"
import Home from "./Views/Home"
import Nosotros from "./Views/Nosotros"
import Contact from "./Views/Contact"
import ItemsDetails from "./Views/Details";
//Components
import Header from "./components/Header/Header";


function App() {
  return (
    <Router>
    <div className="App">
        <Header/>
        <div className="Body">
          <Switch>
          <Route path="/" exact component={Home} ></Route>
          <Route path="/productos" component={Productos} ></Route>
          <Route path="/nosotros" component={Nosotros} ></Route>
          <Route path="/contacto" component={Contact} ></Route>
            <Route path="/details/:id" component={ItemsDetails} ></Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
