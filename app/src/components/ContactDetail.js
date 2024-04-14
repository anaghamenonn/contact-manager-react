import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail = () => {
  const { id } = useParams();
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const contact = contacts.find((c) => c.id === id);

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="ui image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="description">{contact.email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/" className="ui button blue center">Back</Link>
      </div>
    </div>
  );
};

export default ContactDetail;