import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import style from './header.module.css';

const Header = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" variant="light" className="header mt-3">
                <Navbar.Brand href="/" style={{marginRight: 90}}>Logo</Navbar.Brand>
                <Navbar.Toggle className="ms-auto m-1" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto nav-pos">
                        <Nav.Link href="#dashboard" className="navlink-pos">Dashboard</Nav.Link>
                        <Nav.Link href="#stake" className="navlink-pos">Stake</Nav.Link>
                        <Nav.Link href="#liquid" className="navlink-pos">Liquid Crowdloan</Nav.Link>
                        <Nav.Link href="#defi" className="navlink-pos">DeFi</Nav.Link>
                        <Nav.Link href="#bridge" className="navlink-pos">Bridge</Nav.Link>
                        <Nav.Link href="#swtich" className="navlink-pos">Switch</Nav.Link>
                        <NavDropdown title="More" id="collasible-nav-dropdown" className="navlink-pos">
                            <NavDropdown.Item href="#docs">Docs</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#litepaper">Litepaper</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <div className='d-flex'>
                    <button className={style.wallet_button}>Connect wallet</button>
                </div>
            </Navbar >
        </Container>
    )
}

export default Header;