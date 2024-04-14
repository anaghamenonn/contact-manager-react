import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
    const { id,name, email } = props.contact;
    return (
        <div className="item" style={{ 
            backgroundColor: "#f9f9f9",
            padding: "10px", 
            marginBottom: "10px", 
            borderRadius: "5px", 
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto"
        }}>
            <img src={user} alt="user" style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }} />
            <div className="content">
                <Link to={{pathname:`/contact/${id}`, state:{contact: props.contact}}}>
                <div className="header" style={{ marginBottom: "15px", fontSize: "20px", fontWeight: "bold" }}>{ name }</div>
                <div className="header" style={{ fontSize: "14px", color: "#666" }}>{ email }</div>
                </Link>
            </div>
            <i
            className="trash alternate outline icon"
            style={{ cursor: "pointer", color: "black", fontSize: "20px", marginTop: "7px" }}
            onClick={() => props.clickHander(id)}
            ></i>
        </div>
    );
};

export default ContactCard;
