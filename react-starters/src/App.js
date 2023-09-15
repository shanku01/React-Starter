
//ES6 Check
class Name{
  constructor(name){
    this.name = name
  }
}

function App() {
  const myName = new Name("Ram");
  return (
    <div className="App">
      <h1> I am {myName.name}</h1>
    </div>
  );
}

export default App;
