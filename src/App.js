import logo from './logo.svg';
import './App.css';
import girImg from './components/img/girlImg.png'
import { RightOutlined } from '@ant-design/icons';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='container-item item1 ' >
         <span className='circle' ></span> <span className='header' >BASE APPAREL</span>
        </div>
        <div className='container-item item2 ' >
          <img src={girImg}  className='image' ></img>

        </div>
        <div className='container-item item3 ' >
        <section className="email">
            <div>
              <h1>WE'RE</h1>
            </div>
            <div>
            <h2>COMING</h2>
            </div>
            <div>
              <h2>SOON</h2>
            </div>
            <div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem psum has been the industry’s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
              <form>
                <input className='input-email' type="email" placeholder="Email address" />
                <button><RightOutlined  style={{olor: '#FFFFFF	' }} /></button>
              </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
