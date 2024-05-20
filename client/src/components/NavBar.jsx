import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const NavBar = () => {

    return (
        <Navbar fluid rounded>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="#pedido">Quiero Comprar</NavbarLink>
                <NavbarLink href="#nosotros">Sobre nosotros</NavbarLink>
                <NavbarLink href="#productos">Productos</NavbarLink>
                <NavbarLink href="https://api.whatsapp.com/send?phone=595975655014">Contactanos</NavbarLink>
            </NavbarCollapse>
        </Navbar>

    )
}

export default NavBar