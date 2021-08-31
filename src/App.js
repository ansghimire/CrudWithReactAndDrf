import './App.css';
import Navbar from "./components/Navbar";
import CreateInfo from './components/CreateInfo'
import ListInfo from './components/ListInfo'
import DeleteInfo from './components/DeleteInfo';
import Details from './components/Details';
import Update from './components/Update';
import Search from './components/Search';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>  
        <Navbar />
   
        <Route exact path="/" component={CreateInfo} />
        <Route path="/list" component={ListInfo} />
        <Route path="/Delete/:id" component={DeleteInfo} />
        <Route path="/Details/:id" component={Details} />
        <Route path="/Update/:id" component={Update} />
        <Route path="/search" component={Search} />
          

      </div>

    </Router>

  );
}

export default App;
