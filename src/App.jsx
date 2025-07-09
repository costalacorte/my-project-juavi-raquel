
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <h1>hello world</h1>
      <header className="App-header">
      <Navbar/>
      
      </header>
      
      <Footer/>
      
    </div>
  );
}

export default App;
