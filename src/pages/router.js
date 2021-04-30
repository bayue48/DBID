import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/dashboard";
import Browse from "../pages/browse";
import Register from "../pages/auth/";

export default function Router() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/browse/:id" component={Browse} />
      <Route path="/signup" component={Register} />
    </BrowserRouter>
  );
}
