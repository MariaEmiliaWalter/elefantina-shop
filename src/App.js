
import './App.css';
import Header from "./components/Header/Header";
import ItemListContainer from "./components/itemList/ItemListContainer";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="Body">
          <ItemListContainer/>
        </div>
        
    </div>
  );
}

export default App;
