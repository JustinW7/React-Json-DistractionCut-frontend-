import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { addToHistory, deleteAVideo } from '../services/allAPI';

function VideoCard({ displayData, setDeleteVideoStatus,insideCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true);

    const { caption, embedLink } = displayData;
    let today = new Date();
    let timestamp = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(today);

    let videoDetails = {
      caption,
      embedLink,
      timestamp
    };

    await addToHistory(videoDetails);
  };

  const removeVideo = async (id) => {
    const response = await deleteAVideo(id);
    setDeleteVideoStatus(true);
  };

  const dragStarted = (e, id) => {
    console.log("drag started...card Id:" + id);
    e.dataTransfer.setData('videoId', id);
  };

  return (
    <>
      <Card className='mt-3' draggable onDragStart={(e) => dragStarted(e, displayData?.id)}>
        <Card.Img height={'150px'} onClick={handleShow} variant="top" src={displayData?.url} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h6>{displayData?.caption}</h6>


            {insideCategory?"":<button onClick={() => removeVideo(displayData?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>}


          </Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} animation={false} style={{ maxWidth: 'none' }}>
        <Modal.Dialog style={{ maxWidth: '1000px' }}>
          <Modal.Header closeButton>
            <Modal.Title>{displayData?.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe width="921" height="518" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
}

export default VideoCard;
