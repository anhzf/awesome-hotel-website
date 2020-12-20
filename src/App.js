import { 
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App min-h-screen w-full">
      <Router>
          <Switch>
            <Route exact path="/">
              <MainLayout />
            </Route>
            <Route exact path="/Gallery">
              <Gallery></Gallery>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
