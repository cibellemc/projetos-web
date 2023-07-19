import './App.css';

function App() {
  return (
    <div className="App"> 
      <User />
      <User />
      <User />
    </div>
  );
}

const User = () => {
  return (
  <div>
    <h1>Cibelle</h1>
    <h1>cibelle@example.com</h1>
    <h1>19</h1>
    <hr></hr>
  </div>
  )
}

export default App;
