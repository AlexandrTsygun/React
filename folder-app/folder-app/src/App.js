import './App.css';
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';

function App() {
  return (

    <div className="App">

          <Button buttonText="Find Out More"/>
          <Button buttonText="Find Out More"/>
          <Button buttonText="Find Out More"/>

      <div className='wrapCards'>

          <Card
              title="– ROBO –"
              price="10.000 ₽"
              description="УМК по робототехнике"
              buttonText="Оставить заявку"
          />

          <Card
              title="– ROBO –"
              price="15.000 ₽"
              description="УМК по робототехнике"
              buttonText="Оставить заявку"
          />

      </div>

    </div>

  );
}

export default App;