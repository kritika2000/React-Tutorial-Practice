import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards--container">
        {data.map((d) => (
          <Card key={d.id} {...d} />
        ))}
      </div>
    </div>
  );
}

export default App;
