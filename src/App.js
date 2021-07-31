import './App.css';

//REACT ROUTER DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartProvider } from 'react-use-cart';
// VIEWS
import Productos from "./Views/Productos";
import Home from "./Views/Home";
import Nosotros from "./Views/Nosotros";
import Contact from "./Views/Contact";
import Details from "./Views/Details";
import Cart from "./Views/Cart";
import Categorias from './Views/Categorias';
import SignIn from './Views/Ingreso';
import LogIn from "./Views/Login";
//Components
import Header from "./components/Header/Header";
//Provider
import {ItemsProvider} from "./components/Context/ItemsContext";
import { UserProvider } from './components/Context/UserContext';

function App() {
  return (
  <Router>
  <UserProvider>
    <div className="App"> 
      <CartProvider>
        <ItemsProvider>
        <Header/>
        <div className="Body">
          <Switch>
            {/* <Route path="/" exact component={SignIn}></Route> */}
            <Route path="/" exact component={Home} ></Route>
            <Route path="/productos" component={Productos} ></Route>
            <Route path="/nosotros" component={Nosotros} ></Route>
            <Route path="/contacto" component={Contact} ></Route>
            <Route path="/details/:id" component={Details} ></Route>
            <Route path="/Categorias/:Categoria" component={Categorias} ></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/ingreso" component={SignIn}></Route>
                  <Route path="/Login/:Estado" component={LogIn}></Route>
          </Switch>
        </div>
      </ItemsProvider>
    </CartProvider>
    </div>
</UserProvider>
    </Router>
  );
}

export default App;
