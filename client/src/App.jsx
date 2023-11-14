import Tasklist from "./components/Tasklist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="app">
      <div className="task-container">
        <Tasklist />
      </div>
      <ToastContainer />
    </div>
  );
}
export default App;
