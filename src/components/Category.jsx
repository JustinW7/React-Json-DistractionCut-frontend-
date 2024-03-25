import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { addToCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';

function Category() {
  const [allCategories, setAllCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    if (categoryName) {
      let body = {
        categoryName,
        allVideos: [],
      };

      try {
        const response = await addToCategory(body);
        console.log(response);

        if (response.status >= 200 && response.status < 300) {
          const newCategory = { _id: response.data._id, categoryName, allVideos: [] }; // Create new category object
          setAllCategories([...allCategories, newCategory]); // Update state with new category
          handleClose();
          setCategoryName('');
          toast.success('Category added successfully');
        } else {
          toast.error('Failed to add category');
        }
      } catch (error) {
        console.error('Error while adding category:', error);
        toast.error('Something went wrong');
      }
    } else {
      toast.warning('Please provide a category name');
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await getAllCategory();
      setAllCategories(data);
    } catch (error) {
      console.error('Error while fetching categories:', error);
      toast.error('Failed to fetch categories');
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      getCategories();
    } catch (error) {
      console.error('Error while deleting category:', error);
      toast.error('Failed to delete category');
    }
  };

  const dragOver = (e) => {
    console.log("video drag over category");
    e.preventDefault();
  };

  const videoDrop = async (e, categoryId) => {
    console.log("video drop inside category Id:" + categoryId);

    const videoId = e.dataTransfer.getData("videoId");
    console.log("Video card Id:", videoId);

    try {
      const { data } = await getAVideo(videoId);
      console.log(data);

      const selectedCategory = allCategories.find(item => item.id === categoryId);
      selectedCategory.allVideos.push(data);
      console.log(selectedCategory);

      await updateCategory(categoryId, selectedCategory);
      getCategories();
    } catch (error) {
      console.error('Error while dropping video:', error);
      toast.error('Failed to drop video into category');
    }
  };

  return (
    <>
      <div className="d-grid ms-3">
        <button className="btn btn-info" onClick={handleShow}>
          Add to Category
        </button>
      </div>

      {allCategories.length > 0 ? (
        allCategories.map((item) => (
          <div key={item._id} className="mt-5 mb-3 border rounded p-3" onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e, item.id)}>
            <div className="d-flex justify-content-between align-items-center">
              <h6>{item?.categoryName}</h6>
              <button className="btn" onClick={() => handleDelete(item?.id)}>
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </div>

            <Row>

              {

                item?.allVideos &&
                item?.allVideos.map(
                  card => (
                    <Col sm={12} key={card.id}>
                      <VideoCard displayData={card} insideCategory={true} />
                    </Col>
                  )
                )
              }
            </Row>
          </div>
        ))
      ) : (
        <p className="fw-bolder text-danger fs-5">Nothing to Display</p>
      )}

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Category Name</Form.Label>
              <Form.Control
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Enter Category Name"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </>
  );
}

export default Category;
