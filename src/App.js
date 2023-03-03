import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import './style.sass'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
