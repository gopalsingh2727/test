import './App.css';
import { HashRouter } from "react-router-dom"; // ✅ Use HashRouter
import MainRount from './componest/MainRounts/MainRount';
import "./app.css"
function App() {
  return (
    <HashRouter>
      <MainRount />
    </HashRouter>
  );
}

export default App;