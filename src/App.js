import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Shop from './Components/Shop';
import { API_KEY, API_URL } from './config';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Footer></Footer>

      </div>
    )
}

export default App;
