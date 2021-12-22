import './App.css';
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";
import NoFound from "./Components/NoFound/NoFound";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
function App() {
  return (
   <div>
       <Header />
       <Router>
           <Switch>
               <Route exact path="/" component={Shop} />
               <Route path="/shop" component={Shop} />
               <Route path="/review" component={Review} />
               <Route path="/inventory" component={Inventory} />
               <Route path="/products/:productKey" component={ProductDetail}/>
               <Route path="*" component={NoFound} />
           </Switch>
       </Router>

   </div>
  );
}

export default App;