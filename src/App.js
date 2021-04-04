import './App.css';
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Promatches from './components/dota/ProMatches'
import DotaList from './components/dota/DotaList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    
      <Router>
        <Navbar/>
          <Switch>
            <Route path="/" exact component={DotaList} />
            <Route path="/proMatches" exact component={Promatches} />
          </Switch>
          <Footer/>
      </Router>
    
  );
}

export default App;
