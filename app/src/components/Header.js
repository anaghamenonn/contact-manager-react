import React from "react";

const Header = () => {
    return(
        <div className="ui fixed menu" style={{ backgroundColor: "#3498db", padding: "10px 0", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <div className="ui container center">
                <h2 style={{ color: "#fff", paddingLeftt: "50px" }}>Contact Manager</h2>
            </div>
        </div>
    );
}

export default Header;
