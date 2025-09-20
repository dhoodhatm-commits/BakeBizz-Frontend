import React from "react";
import Customers from "./pages/Customers";
import Products from "./pages/Products";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>BakeBizz Dashboard</h1>
      <Customers />
      <Products />
    </div>
  );
}

export default App;
