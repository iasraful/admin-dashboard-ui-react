import Sidebar from "./Components/Sidebar/Sidebar";
import TopBar from "./Components/TopBar";
import "./app.css";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <Sidebar />
        <div className="others">other sideBar</div>
      </div>
    </div>
  );
}

export default App;
