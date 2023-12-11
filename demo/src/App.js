//import './App.css';
import Counter from './components/Counter';
import Rainbow from './components/Rainbow';
import RainbowWrapper from './components/RainbowWrapper';
import Lorem from './components/exos/Lorem';
import { Simple, Simple2, Simple3, Simple4, Simple5 } 
  from './components/simples';


export default function App() {

  return (
    <div className="App">
      <h1>Formation Reactjs</h1>
   
      <RainbowWrapper />

      <Counter />
      <Lorem limit={10} />

      <Simple />
      <Simple2 formation="Angular" />
      <Simple2 formation="React" />
      <Simple3 formation="React" duration={3} />
      <Simple3 formation=".NET" duration={5*5} />
      <Simple4 accessible={true} />
      <Simple4 accessible={false} />
      <Simple5 operand1={4} operand2={2} operator="add" />
      <Simple5 operand1={4} operand2={2} operator="mult" />
    </div>
  );
}

