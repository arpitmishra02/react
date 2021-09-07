import './App.css';
// import MyFunctionalComponent from './Greet';
import {Greet} from './Greet'; // within currly braces
import Message from './Message';
// import Hello from './Hello';
import Welcome from './Welcome';


function App() {
  return (
    <div className="App">
      <p>Hello World!</p>
      <Greet></Greet>
      {/* <MyFunctionalComponent></MyFunctionalComponent> */}
      <Welcome></Welcome>
      {/* <Hello></Hello>
      <Greet name="Bruce" heroName="Batman">
        <p>The Dark Knight</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
       <button>Heat Vision On</button>
      </Greet>
      <Welcome name="Bruce" heroName="Batman">
        <p>The Dark Knight</p>
      </Welcome>
      <Welcome name="Clark" heroName="Superman">
       <button>Heat Vision On</button>
      </Welcome> */}
      <Message></Message>
    </div>
  );
}

export default App;
