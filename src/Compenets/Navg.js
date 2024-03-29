import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { setSearch, setSelectedColor, setSelectedCategory, setSelectedCompany } from '../store/ProductSlice'
import { Link } from 'react-router-dom';
import './cart.css'
let Navg = () => {

    let Dispacth = useDispatch()

    const handleColorClick = (color) => {
        Dispacth(setSelectedColor(color))

    };

    const handleCategoryClick = (category) => {
        Dispacth(setSelectedCategory(category))

    };


    let handleCompany = (cmp) => {
        Dispacth(setSelectedCompany(cmp))

    }
    let showall = () => {
        Dispacth(setSelectedCategory(''))
        Dispacth(setSearch(''))
        Dispacth(setSelectedColor(''))
        Dispacth(setSelectedCompany(''))
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary p-3">
                <Container >
                    <Navbar.Brand href="#" onClick={showall}>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />  <Link to='/' className='css' >UrbanCart</Link>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#" className='mx-2  nav-font' onClick={showall}>All products</Nav.Link>

                            <NavDropdown title="Color" value='' id="navbarScrollingDropdown" >
                                <NavDropdown.Item href="#" value='black' onClick={() => handleColorClick('')}>All</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleColorClick('black')}>Black</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleColorClick('blue')}>
                                    Blue
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleColorClick('red')}>
                                    Red
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleColorClick('white')}>
                                    White
                                </NavDropdown.Item>

                                <NavDropdown.Item onClick={() => handleColorClick('green')}>
                                    Green
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="catgorey" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#" onClick={() => handleCategoryClick('')}>All</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleCategoryClick('Sneakers')}>
                                    Sneakers
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleCategoryClick('Flats')}>
                                    Flats
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleCategoryClick('Sandals')}>
                                    Sandals
                                </NavDropdown.Item>

                                <NavDropdown.Item onClick={() => handleCategoryClick('Heels')}>
                                    Heels
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"

                                onChange={e => Dispacth(setSearch(e.target.value))}
                            />

                        </Form>
                    </Navbar.Collapse>
                    <Link to='/cart' className='css' >Cart</Link>
                </Container>

            </Navbar>


        </>


    )

}
export default Navg