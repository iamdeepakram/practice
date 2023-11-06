import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import PromoImage from './components/promoimage/PromoImage';
import EmailSubscription from './components/email/EmailSubscription';

function App() {
  return (
    <div className="App">
      <div className='flex-container' >
        <div className='flex-item-left' >
          <PromoImage/>
        </div>
        <div className='flex-item-right' >
          <EmailSubscription/>
        </div>
      </div>
    </div>
  );
}

export default App;
