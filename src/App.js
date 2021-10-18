import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services/Services';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Blogs from './components/Blogs/Blogs/Blogs';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/Services">
            <Services></Services>
          </Route>
          <Route path="/Blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/AboutUs">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/Contactus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
