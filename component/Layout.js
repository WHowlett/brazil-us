import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'





export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Brazil-US</title>
            </Head>
            <div>
                <Navbar bg="info" expand="lg">
                    <Navbar.Brand href="/">
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
                            <Nav.Link href="/">Brasileiros</Nav.Link>
                            <Nav.Link href="/">American</Nav.Link>
                            <Nav.Link href="/about/contact">Contato/Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
                <br></br>
            </div>
            <main>{children}</main>
            <br />
            <footer className='text-center text-danger'>
                <p>Created by Wayne Howlett ©2023 - American married to beatiful Brazilian</p>
                <br />
            </footer>

        </div>
    )

}