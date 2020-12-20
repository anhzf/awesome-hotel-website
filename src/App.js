import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="App min-h-screen w-full">
      <Router>
          <Switch>
            <Route exact path="/">
              <MainLayout />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
