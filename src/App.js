import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='Main-container'>
        <Main/>
      </div>
      <Footer/>
    </div> 
  );
}

export default App;
