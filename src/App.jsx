import API from "./components/api.jsx";
import Login from "./components/Login.jsx";
import Registration from "./components/Registration.jsx";


function App() {
  return (
    <div className="App">
      <Registration />
      <Login />
      <API />
    </div>
  );
}

export default App;