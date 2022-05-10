import './styles/globals.css';
import Header from './components/header'
import Products from './components/products';
import ProductView from './components/product_view';

function App() {

  let url = window.location.href.split("/")
  let get_id = url[url.length-1].split(":")[1]

  return (
    <>
      <Header />
      <Products />
      <ProductView id={get_id} />
    </>
  );
}

export default App;
