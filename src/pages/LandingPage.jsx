import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function LandingPage() {
  const navigateByUrl=useNavigate()
  return (

    <>
      <Row className='mt-5 align-items-center justify-content-between w-100'>



        <Col></Col>
        <Col lg={5}>
          <h1 style={{ textAlign: 'justify' }}> <span className='text-warning'>Why DistractionCut?</span></h1>
          <p><i class="fa-regular fa-circle-check fa-beat"></i>Distractions on YouTube: Users face numerous distractions on YouTube, including suggested videos, ads, comments, and related content, detracting from their learning focus..</p>

          <p><i class="fa-regular fa-circle-check fa-beat"></i>Lack of Structured Learning Paths: YouTube lacks structured learning paths found in formal education, making it challenging for users to organize videos into coherent learning journeys without significant effort.</p>
          <button onClick={()=>navigateByUrl('/home')} className='btn btn-info'>Get started</button>
        </Col>


        <Col lg={5}>
          <img src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?t=st=1711378626~exp=1711382226~hmac=087fac762bba4c476a759e03b3dd5a884ade68e62ec34f3c7c4bb82373bf8c88&w=1380" alt="" />
        </Col>



        <Col></Col>
      </Row>
<div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
  <h3>Features</h3>

<div className="cards  mb-5 mt-5 d-flex align-items-center justify-content-between w-100">




<Card className='p-5 bg-secondary' style={{width:'22rem'}}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://img.freepik.com/free-vector/student-stress-concept-illustration_114360-9550.jpg?t=st=1711378719~exp=1711382319~hmac=f398086c74fade5d2d389c85b93466dc002b7eba7c3600d410233f7b01ce8349&w=900"/>
      <Card.Body>
        <Card.Title>Distraction Less Youtube Learning</Card.Title>
        <Card.Text>
         Say GoodBye to recommended videos,suggested Videos and focus only on your learning journey.
        </Card.Text>
      
      </Card.Body>
    </Card>



<Card  className='p-5 bg-secondary'   style={{width: '22rem'}}>
    <Card.Img height={'300px'} width={'300px'} variant="top" src="https://img.freepik.com/free-vector/filing-system-concept-illustration_114360-1138.jpg?t=st=1711378789~exp=1711382389~hmac=b9b54337ab8898c076cb52d21d811ab05200b6d0ff59bcf9c9a18c17e718e2f2&w=900"/>
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
         
Organize your educational videos into categories and easily access them all together.
        </Card.Text>
      
      </Card.Body>
    </Card>




    
<Card  className='p-5 bg-secondary'   style={{width: '22rem'}}>
    <Card.Img height={'300px'} width={'300px'} variant="top" src="https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg?t=st=1711378887~exp=1711382487~hmac=74e88b0467dc7a1f9e1413798a740ae6eff67f3678ed091b30cb1b431ac6255b&w=900"/>
      <Card.Body>
        <Card.Title>Watch History of Videos</Card.Title>
        <Card.Text>
  
Check your viewing history and the duration of your learning sessions to understand your study patterns better.
        </Card.Text>
      
      </Card.Body>
    </Card>
</div>
</div>
<div className="container border rounded p-5 border-light mb-5  mt-5 d-flex align-items-center justify-content-between w-100">
  <div className="col-lg-5">
    <h3 className='mb-3 text warning'>Simple,Powerful and Fast</h3>
    <h6><span className=' mb-5 fs-5 fw-bolder text'><i class="fa-solid fa-check fa-beat"></i>.Learn with Focus </span></h6>
    <h6><span className=' mb-5 fs-5 fw-bolder text'><i class="fa-solid fa-check fa-beat"></i>.Categorize Videos in One place </span></h6>
    <h6><span className=' mb-5 fs-5 fw-bolder text'><i class="fa-solid fa-check fa-beat"></i>.Watch Analytics of your learning </span></h6>

  </div>
<div className="video col-lg-5">

<iframe width="560" height="315" src="https://www.youtube.com/embed/bMknfKXIFA8?si=1Hwpk4ShWBrN7n8i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>


    </>
  );
}

export default LandingPage;
