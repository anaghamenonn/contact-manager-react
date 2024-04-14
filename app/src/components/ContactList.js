import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => (
    <ContactCard
      contact={contact}
      clickHander={deleteContactHandler}
      key={contact.id}
    />
  ));

  return (
    <div className="main" style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#fff" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Contact List
        <Link to="/add">
          <button className="ui button blue right" style={{ float: "right" }}>Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
