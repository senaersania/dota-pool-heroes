import './App.css';
import Navbar from './components/layouts/Navbar'
import DotaList from './components/dota/DotaList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    
      <Router>
        <Navbar/>
          <Switch>
            <Route path="/" exact component={DotaList} />
          </Switch>
      </Router>
    
  );
}

export default App;
