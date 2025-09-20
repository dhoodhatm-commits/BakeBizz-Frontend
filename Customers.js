import React, { useState, useEffect } from "react";

const API_URL = "https://bakebiz.onrender.com"; // 

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/customers`)
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);

  const addCustomer = () => {
    fetch(`${API_URL}/customers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, type: "direct" })
    })
      .then((res) => res.json())
      .then((newCustomer) => setCustomers([...customers, newCustomer]));
    setName("");
  };

  return (
    <div>
      <h2>Customers</h2>
      <input
        value={name}
        placeholder="Enter customer name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addCustomer}>Add Customer</button>

      <ul>
        {customers.map((c) => (
          <li key={c.id}>{c.name} ({c.type})</li>
        ))}
      </ul>
    </div>
  );
}

export default Customers;
