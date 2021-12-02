import React from "react";
import { ListGroup } from 'reactstrap';
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <ListGroup className="menu-list my-3">
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/admin-login" action>Admin Login</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/book-appointment" action>Book Appointment</Link>
            {/* <Link className="list-group-item list-group-item-action" tag="a" to="/view-event" action>View Appointment</Link> */}
            <Link className="list-group-item list-group-item-action" tag="a" to="/profile" action>Profile</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/contact-us" action>Contact Us</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/about-us" action>About Us</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-event" action>Add Event</Link>
        </ListGroup>
    );
};

export default Menu;