import {BrowserRouter, Route, Switch} from 'react-router-dom'

import GetAbout from './components/About'
import GetHome from './components/Home'
import GetNotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={GetHome} />
      <Route exact path="/about" component={GetAbout} />
      <Route component={GetNotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
