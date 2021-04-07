import './App.css';
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import HeroesList from './components/dota/HeroesList'
import TeamList from './components/dota/TeamList'
import Promatches from './components/dota/ProMatches'
import TeamDetail from './components/dota/TeamDetail'
import HeroDetail from './components/dota/HeroesDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [idHero, setIdHero] = useState('')
  return (
    
      <Router>
        <Navbar/>
          <Switch>
            <Route path="/" exact component={HeroesList} />
            <Route path="/heroes" exact component={HeroesList} />
            <Route path="/heroDetail" exact component={HeroDetail}/>
            <Route path="/heroDetail/:id" exact component={HeroDetail}/>
            <Route path="/teamList" exact component={TeamList}/>
            <Route path="/proMatches" exact component={Promatches} />
            <Route path="/team/:id" exact component={TeamDetail} />
          </Switch>
          <Footer/>
      </Router>
    
  );
}

export default App;
