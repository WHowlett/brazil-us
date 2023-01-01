import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from "@emotion/styled";
import Image from 'next/image'





export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Brazil-US</title>
            </Head>
            <div>
                <Navbar bg="info" expand="lg">
                    <Navbar.Brand href="#home">
                        <div>
                        <Image
                            src="/Brazil-US.png"
                            width="50"
                            height="50">
                        </Image>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
                <br></br>
            </div>
            <main>{children}</main>
            <br />
            <footer className='text-center text-danger'>
                <p>Created by Wayne Howlett ©2023 - American married to beatiful Brazilian</p>
            </footer>

        </div>
    )

}