import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route exact path="/">
              <MainLayout />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
