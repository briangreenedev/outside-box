import React from 'react';
import './App.css';
import IndexPage from "./pages/index-page/index-page";
import ContactPage from "./pages/contact-page/contact-page";
import {useRoutes} from 'hookrouter'

const routes = {
  "/": () => <IndexPage />,
  "/contact": () => <ContactPage />
};

function App() {
  const routeResult = useRoutes(routes)
  return routeResult
}

export default App;
