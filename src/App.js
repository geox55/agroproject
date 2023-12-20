import "./App.css";
import React from "react";
import Layout from "./pages/Layout/Layout";
import Routers from "./components/Routers";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routers />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
