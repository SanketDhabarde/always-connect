import "./App.css";
import { Navbar } from "./components";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
