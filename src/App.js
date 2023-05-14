import { Route , Switch , Redirect } from "react-router-dom";
//Context
import ProductsContextProvider from "./context/ProductsContextProvider";
//Components
import Store from './components/Store'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <ProductsContextProvider>
      <Switch>
          <Route path="/products/:id" component={ProductDetail}/>
          <Route path="/products" component={Store}/>
          <Redirect to="/products"/>
      </Switch>
    </ProductsContextProvider>
  );
}

export default App;
