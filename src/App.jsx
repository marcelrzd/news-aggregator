import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="flex-grow">
        <Home />
      </div>
    </div>
  );
}

export default App;
