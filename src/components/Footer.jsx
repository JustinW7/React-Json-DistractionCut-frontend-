import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

function Footer() {
  return (
    <div>
      
      <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
       
      </div>

      <div>
        
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon="gem" className="me-3" />
         Video Player
            </h6>
            <p>
             DistractionCut  makes you distraction free Learning from Youtube.
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
            <p>
              <a href='LandingPage' className='text-reset'>
                LandingPage
              </a>
            </p>
            <p>
              <a href='Home' className='text-reset'>
                Home
              </a>
            </p>
            <p>
              <a href='WatchHistory' className='text-reset'>
                Watch History
              </a>
            </p>
           
          </MDBCol>

         

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              New York, NY 10012, US
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              info@example.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
            </p>
            <p>
              <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

   
  </MDBFooter>
  
  </div>
  )
}

export default Footer