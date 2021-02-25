import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer.js'

import Home from './pages/Home'

function App() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
