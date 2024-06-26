import logo from "./logo.gif";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          {" "}
          <Dictionary />
        </main>
        <footer className="App-footer">
          {" "}
          <small> Coded by Juliette Rose </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
