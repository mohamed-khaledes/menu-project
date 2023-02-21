import React,{useState} from 'react'
import { Row ,Container,Nav,Navbar,Form} from 'react-bootstrap';
import {FaUtensils} from "react-icons/fa"

const NavbarComponent = ({searchFilter}) => {
  const [searchWord ,setSearchWord] = useState("")
  // on search functoin
  const onSearch = (e)=>{
    e.preventDefault()
    searchFilter(searchWord)
    setSearchWord("")
  }
  return (
    <Row style={{maxWidth:"100%",margin:"0"}}>
        <Navbar className='navbar' variant='dark' expand="lg" >
      <Container>
        <Navbar.Brand href="#">
          <div className='logo'> <FaUtensils /> المطعم العربى</div>
        </Navbar.Brand>
        <Nav.Link className='px-3 m-2 fs-7' href='#menu'>قائمة الطعام</Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="ماذا تريد"
              className="me-2 bg-light"
              aria-label="Search"
              onChange={(e)=>setSearchWord(e.target.value)}
              value={searchWord}
            />
            <button onClick={(e)=>onSearch(e)} className='btn mx-2 search-btn'>بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}
export default NavbarComponent;