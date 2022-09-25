import Welcome from './Components/Banner';
import NavigasiBar from './Components/Navbar';
import "./Components.css"
import Product from './Components/Product';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
        <div className='main'>
          <NavigasiBar/>
          <Welcome/>
          <Product/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
