import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Details from "../details/Details";
import Login from "../login/Login";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const [auth, setAuth] = useState(true);

  const AuthContainer = () => (
    <div>
      <Navbar />
      <PrivateRouter auth={auth} exact component={Home} />
      <PrivateRouter auth={auth} exact component={Details} />
      <PrivateRouter auth={auth} exact component={About} />
    </div>
  );
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" exact component={() => <Login />} />
          <Route component={AuthContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
