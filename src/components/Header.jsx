import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <div>

<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to={'/LandingPage'} style={{textDecoration:'none',color:'black',fontSize:'30px'}}>
           
            <i class="fa-sharp fa-regular fa-file-video fa-beat m-3"></i>
          DistractionCut
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header