
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Login from './login';

function App() {
  return (

    <div className="App">
      {<Nav/>}
      {<Login/>}
      {<Home/>}

    </div>
  );
}

export default App;
