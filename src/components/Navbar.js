import React from 'react';
import {Container, Nav, Navbar, NavLink} from 'react-bootstrap';
import "../assets/Navbar.css"
import { getUsername } from './Handle';
import {Link} from "react-router-dom";

function NavBar() {
    const username = getUsername();
    
    return (
        <Navbar expand="lg" bg="light" variant="light">
            <Container style={{ display: "flex", justifyContent: "space-between", width: "100%", justifyItems: "center" }}>
                <Navbar.Brand as={Link} to={"/home"}>
                    <img
                        src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
                        width="30px"
                        height="30px"
                        className="d-inline-block align-top"
                        alt="LeetCode logo"
                        style={{ marginRight: "10px" , display: "inline-block" }}
                    />{' '}
                    InApp Credit System
                </Navbar.Brand>
                <Nav style={{ padding: "14px, 16px", justifyItems: "center", paddingTop: "14px" }}>
                    <NavLink as={Link} to={"/"}>
                        Home
                    </NavLink>
                    <NavLink as={Link} to={"/login-register"}>
                        Login/Register
                    </NavLink>
                    <NavLink as={Link} to={"/home"}>
                        {username ? `${username}` : null}
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;