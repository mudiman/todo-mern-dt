import React from "react";
import "./App.css";
import MainRoute from "./routes/MainRoute";
import SiteLayout from "./components/layout/SiteLayout";

function App() {
  return (
    <SiteLayout>
      <MainRoute />
    </SiteLayout>
  );
}

export default App;
