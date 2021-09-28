import Sidebar from "./Components/Sidebar/Sidebar";
import TopBar from "./Components/TopBar";
import "./app.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
