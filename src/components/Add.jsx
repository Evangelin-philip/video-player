import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { upload_Video } from "../services/allAPICall";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// setUploadVideoServerResponse state update function from parent(home ) destructured
function Add({setUploadVideoServerResponse}) {

  // state for storing data from forms
  const [video,setVideo]=useState({
    id:"",
    caption:"",
    image_url:"",
    // youtube_link:"",--------------------no need of direct link we need embeded link
    embed_link:""
  })


  // function for extracting youtube url and updating state
  const extract_url=(e)=>{
    // getting e.target.value using destructuring
    const {value}=e.target
    // console.log(value.slice(-11));
   if(value){
    const embeded_url=`https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embed_link:embeded_url})
   }else{
    setVideo({...video,embed_link:""})
   }
  }
  console.log(video);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

// as handle uplaod is an api call , give async
  const handle_upload= async ()=>{
    // video = state
    // get details of video uploaded
   const  {id,caption,image_url,embed_link}=video  
  //  if video form of any is unfilled
  if(!id || !caption || !image_url || !embed_link){
    // --------------------------------------------------TOASTIFY-------------------------------------------------------
    // alert("please fill the form completly")
    toast.warning("please fill the form completly")
  }else{
    // making api call for uploading
    const response=await upload_Video(video)
    console.log(response)
    if(200<=response.data.status<300 ){
      // resetting video state values on sucess
      setVideo({ 
        id:"",
      caption:"",
      image_url:"",
      embed_link:""})
          // --------------------------------------------------TOASTIFY-------------------------------------------------------
      // alert(`"${response.data.caption}" video uploaded sucessfully !!!!!!!`)
      toast.success(`"${response.data.caption}" video uploaded sucessfully !!!!!!!`)


      // --------------------------------------------------------------------------UPDATING SERVERRESPONSE STATE OF PARENT(HOME)
      setUploadVideoServerResponse(response.data)
      // hide modal
      handleClose()
    }else{
      //  as woking on json server, no backend so we need to provide unique id
  // --------------------------------------------------TOASTIFY-------------------------------------------------------
      // alert(`Please provide a unique id!!!!`)
      toast.error(`Upload error.............Please try after sometime   !!!!`)
    }
  }
  }

  return (
    <div className="d-flex align-items-center">
      <h5>Upload New Video</h5>
      <button className="btn" onClick={handleShow}>
        <i className="fa-solid fa-circle-plus fs-5"></i>
      </button>
      {/* static modal bcos once clicking outside modal it should not lose automatically
       */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following Details.</p>
          <Form className="border border-secondary p-3 ounded">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              {/* <Form.Label>New Category Name</Form.Label> */}
              <Form.Control type="email" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              {/* <Form.Label>New Category Name</Form.Label> */}
              <Form.Control type="email" placeholder="Enter Video Caption"  onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              {/* <Form.Label>New Category Name</Form.Label> */}
              <Form.Control type="email" placeholder="Enter Video Image Url"  onChange={(e)=>setVideo({...video,image_url:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              {/* <Form.Label>New Category Name</Form.Label> */}
              <Form.Control
                type="email" placeholder="Enter Youtube Video Link" onChange={(e)=>extract_url(e)}/>
            </Form.Group>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handle_upload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>


      {/* --------------------------------------------TOAST CONTAINER-------------------------------------------- */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Add;


