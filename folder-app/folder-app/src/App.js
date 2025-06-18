import './App.css';
import { Buttons, Cards } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Buttons buttonText="Find Out More"/>

      <div className='appCards'>

        <Cards
          title="– ROBO –"
          firstCardPrice="15.000 ₽"
          secondCardPrice="10.000 ₽"
          description="УМК по робототехнике"
          buttonText="Оставить заявку"
        />

      </div>
    </div>
  );
}

export default App;