import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route path="/login" component={LoginForm} />
    <Route path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
