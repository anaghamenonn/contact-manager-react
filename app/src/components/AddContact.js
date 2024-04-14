import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContactHandler }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/"); // navigate to the home page
  };

  return (
    <div className="ui main" style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#fff", maxWidth: "400px", margin: "0 auto", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "24px" }}>
        Add Contact
      </h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field" style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "bold" }}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "3px", border: "1px solid #ccc" }}
          />
        </div>
        <div className="field" style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "bold" }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "3px", border: "1px solid #ccc" }}
          />
        </div>
        <button className="ui button blue" type="submit" style={{ width: "100%", padding: "10px", borderRadius: "3px", border: "none", backgroundColor: "#3498db", color: "#fff", fontWeight: "bold" }}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
