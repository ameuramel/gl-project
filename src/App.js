import './App.css';

function App() {
  const title = "hi i'm Amel"
  const person = {name : 'amel', age : 20}
  return (
    <div className="App">
      <div className="content">
        <h1>
          {person.name}
        </h1>
      </div>

    </div>
  );
}

export default App;
