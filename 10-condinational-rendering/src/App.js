import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={3} hasPet={false} />
      <PetInfo animal="dog" age={7} hasPet />
    </div>
  );
}

export default App;
