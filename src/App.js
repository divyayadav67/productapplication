import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Additem from './Components/Items/Additem';
import Edit from './Components/Items/Edit'
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Navbar from './Components/Layout/Navbar';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Item from './Components/Items/Item';
function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Routes>
       <Route exact path="/home" element={<Home />}>Home</Route>
       <Route exact path="/About" element={<About />}>About</Route>
       <Route exact path="/Contact" element={<Contact />}>Contact</Route>
       <Route exact path="/Items/add" element={<Additem />}>Additem</Route>
       <Route exact path="/Items/:id" element={<Item />}>Item</Route>
       <Route exact path="/Items/edit/:id" element={<Edit />}>Edit</Route>
       
     </Routes>
    </div>
    </Router>
  );
}

export default App;
