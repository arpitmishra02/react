import './App.css';
import ClassClick from './ClassClick';
import Counter from './Counter';
import EventBind from './EventBind';
import FunctionClick from './FunctionClick';
// import MyFunctionalComponent from './Greet';
import {Greet} from './Greet'; // within currly braces
import Message from './Message';
import ParentComponent from './ParentComponent';
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
      {/* <Message></Message>
      <Counter></Counter>
      <Greet name="Diana" heroName="WonderWoman">
       <button>Go to Temiskyra</button>
      </Greet> */}

      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <EventBind></EventBind> */}

      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
