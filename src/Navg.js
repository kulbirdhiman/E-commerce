import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

let Navg = ({ setSearch, setSelectedColor, setSelectedCategory, setSelectedCompany }) => {


    const handleColorClick = (color) => {
        setSelectedColor(color);

    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);

    };


    let handleCompany = (cmp) => {
        setSelectedCompany(cmp)

    }
    let showall = () => {
        setSelectedCategory('')
        setSearch('')
        setSelectedColor('')
        setSelectedCompany('')
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary p-3">
                <Container >
                    <Navbar.Brand href="#" onClick={showall}>UrbanCart
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
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

                                onChange={e => setSearch(e.target.value)}
                            />

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <Button onClick={() => handleCompany('')} variant="secondary" className='m-2'>All</Button>
                <Button onClick={() => handleCompany('nike')} variant="secondary" className='m-2'>Nike</Button>
                <Button onClick={() => handleCompany('adidas')} variant="secondary" className='m-2'>Adidas</Button>
                <Button onClick={() => handleCompany('puma')} variant="secondary" className='m-2'>Puma</Button>

            </Container>
        </>


    )

}
export default Navg