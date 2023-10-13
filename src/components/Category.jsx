import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { add_category, get_category_data, delete_a_category, get_a_Video, update_a_Category } from "../services/allAPICall";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VideoCard from "./VideoCard";

function Category() {
  // ---------------------------tate for holding category data when show_Catergory_data () calls
  const [category_data, setCategory_data] = useState([]);

  // --------------------------------state for holding textbox data on chnage
  const [categoryName, setCategoryName] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //  --------------------------------------------------on click of ADD btn--------------------------------------------------
  const handle_Add_category = async () => {
    if (categoryName) {
      // kepp the api call argument as object other wise error, bcos its json forat server
      // make api call for adding to server
      const response = await add_category({ categoryName,allVideos:[] });
      //                                                          OR
      // body={
      //   categoryName,
      //   allVideos:[]
      // }
      // const response = await add_category(body)
      // console.log(response);
      if (response.status >= 200 && response.status < 300) {
        // ----------------------------Hide Modal once added sucessfully------------------------------------
        handleClose();
        // ---------------------------alert from toast-------------------------------
        toast.success("Category Added Sucessfully");
        // -----------------------------catergoyName reset to "" for new category insert---------------------------------
        setCategoryName("");
        // -----------------------------call show_Catergory_data to updtae console showing currently added data also
        show_Catergory_data();
      } else {
        toast.warning("Uploading Error.......Please try after sometime !!");
      }
    } else {
      toast.info("Please Provide Category Name !");
    }
  };
  // ----------------------------------------------------------------------------------------------------------------------------------------

  // ----------------------------------------------To Get the category datas added to server----------------------------------------
  const show_Catergory_data = async () => {
    const { data } = await get_category_data();
    console.log("category data", data);
    setCategory_data(data);
  };
  // console.log(category_data);
  useEffect(() => {
    show_Catergory_data();
  }, []);
  // -------------------------------------------------------------------------------------------------------------------------------------


  //------------------------------------------------------TO delete a categoy--------------------------------------------------------------
  const delete_category=async(id)=>{
    // make api call
    await delete_a_category(id)
    // get all category data and update category l;ist
    show_Catergory_data()
  }
  // ------------------------------------------------------------------------------------------------------------------------------------------


  // ------------------------------------------------------Dragging Evnets--------------------------------------------------

  // function for drag over event---------------------------------
  const drag_over=(dragOver_event)=>{
    console.log("Dragging over the category");
    dragOver_event.preventDefault()
  }

  // function for drop event----------------------------------------
  // function now becomse async as we nee to get the details of videos from server
  const video_dropped=async (dropEvent,category_id)=>{
    console.log("Dropped inside Category Id : "+category_id);
    const videoCard__id=dropEvent.dataTransfer.getData("cardId")
    console.log("video dropped is id no : "+videoCard__id)
    // getting details of video dropped inside category
    // api call getAVideo () from allAPIcalls.js can be used here
    const {data}=await get_a_Video(videoCard__id)
    console.log(data);

    //  now i need to add this video details to particular category
    // to get details of category to which videocard dropped
    const selected_category_data=category_data.find(item=>item.id===category_id)
    //pushing the video data to allvideos key inside category
    selected_category_data.allVideos.push(data)
      console.log(selected_category_data);

      // updating category with video details in json server
      // API call
      await update_a_Category(category_id,selected_category_data)
      show_Catergory_data()
    }


  
  return (
    <div className="w-75" style={{float:'right'}}>
      <div className="d-grid">
        <button onClick={handleShow} className="btn btn-primary">
          Add New Category
        </button>
      </div>

      {/* --------------------------------------------List showing categoes from server when show_Catergory_data() calls------------------------  */}

        <div className="mt-3">
          {category_data.length>0?
            category_data?.map((item) => (
              <div className="border mt-3 mb-3 p-3 rounded" droppable onDragOver={(e)=>drag_over(e)}  onDrop={(e)=>video_dropped(e,item?.id)}>
                <div className="d-flex justify-content-between align-items-center">
                  <h6>{item?.categoryName}</h6>
                  <button className="btn" onClick={()=>{delete_category(item?.id)}}>
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "#FB0404" }}
                    ></i>
                  </button>
                </div>

                {
                  item?.allVideos && 
                  <Row>
                    {
                      item?.allVideos.map(video=>(
                        // in small screen take all 12 parts
                        <Col sm={12}>
                          <VideoCard displayVideo={video} inside_category={true} />   
                        </Col>
                      ))
                    }
                  </Row>
                }
              </div>
            ))
           : 
            <p className="fw-bolder fs-5 mt-5 text-danger">
              No categories To Display !!!!!!!
            </p>
          }
        </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p>Please fill the following Details.</p> */}

          <Form className="border border-secondary p-3 ounded">
            {/* -----------------------------------------------ID can added automatically by json server--------------------------------------------------------- */}

            {/* <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Enter Category ID" />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formGroupEmail">
              {/* <Form.Label>New Category Name</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Enter Category Name"
                // -----------------------------------------on change f text box value state value updating--------------------------------
                onChange={(e) => {
                  setCategoryName(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        {/* FORM--------------------------- */}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handle_Add_category}>
            Add
          </Button>
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

export default Category;
