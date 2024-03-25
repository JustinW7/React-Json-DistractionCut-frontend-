import { Button, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import {uploadVideo}  from '../services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Add({setUploadVideoServerResponse}) {


  const [video,setVideo]=useState({
id:"",caption:"",url:"",embedLink:"" 

  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

const getEmbedLink=(e)=>{
  const {value}=e.target 


  if (value){
    
  const link=`https://www.youtube.com/embed/${value.slice(-11)}`
  setVideo({...video,embedLink:link})
}else{
  setVideo({...video,embedLink:""})
}
}
console.log(video)

const handleUpload=async()=>{
  const {id,caption,url,embedLink}=video
  if(!id|| !caption||  !url||  !embedLink){
    toast.warning("please fill missing feilds")
  }else{
    //make api call 
    const response=await uploadVideo(video)
    console.log(response);

    if(response.status>=200 && response.status<300){
    toast.success(`${response.data.caption} video uploaded`)

    setUploadVideoServerResponse(response.data)

    //reset forms feilds after we upload a video into a form field 

    setVideo({
      id:"",caption:"",url:"",embedLink:""

    })
    //hide modal 
    handleClose()
    }else{
    // console.log(response);
      toast.error("something went wrong")
    }
  }
}
  return (
<>


<div className="d-flex align-items-center">
<button className='btn btn-light' onClick={handleShow}> Upload Videos </button>



</div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <p>Fill the following feilds</p>

       


       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
  
        <Form.Control type="email" placeholder="Enter Video Id" onChange={(e)=>setVideo({...video,id:e.target.value})} />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" >
        
  
        <Form.Control type="email" placeholder="Enter Video  Title" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
  
        <Form.Control type="email" placeholder="Enter Video Image Url" onChange={(e)=>setVideo({...video,url:e.target.value})} />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
  
        <Form.Control type="email" placeholder="Enter Video Link"  onChange={getEmbedLink}/>
      
      </Form.Group>
    
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>


      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}
      />
</>
  )
}

export default Add