import {Route, Switch, Redirect} from 'react-router-dom'

import Tech from './components/Tech'

import Header from './components/Header'

import NotFound from './components/NotFound'

import SkillDetails from './components/SkillDetails'

import './App.css'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Tech} />
      <Route exact path="/courses/:id" component={SkillDetails} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
