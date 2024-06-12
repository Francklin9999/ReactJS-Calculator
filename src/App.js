import {useState, useRef} from "react"; 
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [awnser, setAwnser] = useState(0);

  const add = (e) => {
    e.preventDefault();
    setAwnser((awnser) => awnser + Number(inputRef.current.value));
  };
  const minus = (e) => {
    e.preventDefault();
    setAwnser((awnser) => awnser - Number(inputRef.current.value));
  };
  const times = (e) => {
    e.preventDefault();
    setAwnser((awnser) => awnser * Number(inputRef.current.value));
  }; 
  const divide = (e) => {
    e.preventDefault();
    setAwnser((awnser) => awnser / Number(inputRef.current.value));
  }; 
  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value='';
  };
  const resetAwnser = (e) => {
    e.preventDefault();
    setAwnser(0);
  };   
  return (
  <div className="App">
    <div>
      <h1>Calculator</h1>
    </div>
      <form>
        <div id="awnserId">
        <p>Result: {awnser}</p>
        </div>
        <div id="inputId">
        <input 
        type="number"
        ref={inputRef}
        placeholder="Type a number"
        />
        </div>
        <div id="buttonId">
        <button onClick={add}>Plus</button>
        <button onClick={minus}>Minus</button>
        <button onClick={times}>Times</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset input</button>
        <button onClick={resetAwnser}>Reset awnser</button>
        </div>
      </form>
  </div>
  ); 
} 
 
export default App;
