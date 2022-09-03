import React from "react";
import Navbar from "./Component/Layout/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import NotFound from "./Component/Pages/NotFound";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddUsers from "./Component/Users/AddUsers";
import EditUsers from "./Component/Users/EditUsers";
import Users from "./Component/Users/Users";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/add/user" component={AddUsers} />
          <Route exact path="/edit/user/:id" component={EditUsers} />
          <Route exact path="/user/:id" component={Users} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
