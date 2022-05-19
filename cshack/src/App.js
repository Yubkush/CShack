import ResponsiveAppBar from './Components/Navbar'
import ProblemsStack from './Components/ProblemsStack'

import "./App.css";


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <header className="App-header">
        <ProblemsStack />
      </header>
    </div>
  );
}

export default App;
