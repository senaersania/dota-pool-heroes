import './App.css';
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import DotaList from './components/dota/DotaList'
import TeamList from './components/dota/TeamList'
import Promatches from './components/dota/ProMatches'
import TeamPlayer from './components/dota/TeamPlayer'
import TeamDetail from './components/dota/TeamDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    
      <Router>
        <Navbar/>
          <Switch>
            <Route path="/" exact component={DotaList} />
            <Route path="/heroes" exact component={DotaList} />
            <Route path="/teamList" exact component={TeamList}/>
            <Route path="/proMatches" exact component={Promatches} />
            <Route path="/team/:id" exact component={TeamDetail} />
          </Switch>
          <Footer/>
      </Router>
    
  );
}

export default App;
