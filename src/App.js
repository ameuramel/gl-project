import './App.css';

function App() {
  const title = "hi i'm Amel"
  const person = {name : 'amel', age : 30}
  return (
    <div className="App">
      <div className="content">
        <h1>
          {person.age}
        </h1>
      </div>

    </div>
  );
}

export default App;
