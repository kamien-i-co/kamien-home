import React from "react";

import { Switch, Route } from "react-router-dom";

import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";
import TagArticles from "../Tag"

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
        <Route path="/tag/:id" component={TagArticles} exact />
      </Switch>
    </div>
  );
}

export default App;
