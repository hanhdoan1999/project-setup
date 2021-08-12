
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
function App() {


  return (
    <BrowserRouter>
       <Switch>
       <Route path="/" exact component={Home}/>
       {/* <Route path="/product/:productId" exact component={ProductDetail}/> */}
       <Route>404 </Route>  
     </Switch>
 </BrowserRouter>
  );
}

export default App;
