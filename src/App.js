import logo from './logo.svg';
import './App.css';
import EmailSubscription from './components/email/EmailSubscription';
import girImg from './components/img/girlImg.png'

function App() {
  return (
    <div className="App">
      <div className='container' >
      <div className='container-item' >
          <h1>BASE APPAREL</h1>
        </div>
        <div className='container-item' >
          <img src={girImg}  className='image' ></img>
        </div>
        <div className='container-item' >
          <EmailSubscription/>
        </div>
      </div>
    </div>
  );
}

export default App;
