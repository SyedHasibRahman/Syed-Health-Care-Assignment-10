import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services/Services';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Blogs from './components/Blogs/Blogs/Blogs';
import AboutUs from './components/AboutUs/AboutUs';
import Contactus from './components/Contactus/Contactus';
import Details from './components/Services/Details/Details';
import Login from './components/Auth/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Auth/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/Services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/Blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/AboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/Contactus">
              <Contactus></Contactus>
            </Route>
            <PrivateRoute path="/Details/:DetailsId">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
