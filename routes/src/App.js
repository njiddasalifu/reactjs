import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Route path="/" component={Home}>
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const About = () => (
  <div>
    <h1>About</h1>
  </div>
);

export default App;