import './App.css';
import Form from './Components/Form'
import {useState} from 'react'

function App() {

  const initialState = ['Hello']
  const [toDosState, setToDosState] = useState(initialState)

  return (
    <div className="App">
      <header className="App-header">
        <Form state={toDosState} setState={setToDosState}/>
        {console.log(toDosState)}
        <ul>
        </ul>
      </header>
    </div>
  );
}

export default App;
