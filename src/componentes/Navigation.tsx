import { Button, ButtonToolbar, Form, FormControl, Nav, Navbar, NavbarBrand, Tab } from "react-bootstrap"

export const Navigation = () => {

    return(
        <>
            <Navbar variant="dark" className="center" >
                <Navbar.Brand href="/home">Home <></>
                </Navbar.Brand>
                <Navbar>
                <Nav.Link href="/Ubicacion">Donde estamos?   </Nav.Link>
                <Nav.Link href="/QuienesSomos">Quienes somos?</Nav.Link>
                </Navbar>
            </Navbar>
        </>
    )
}