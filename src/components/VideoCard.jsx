import React from "react";
import { Card, Modal } from "react-bootstrap";
import { useState } from "react";
import { delete_a_Video,add_video_to_watch_history } from '../services/allAPICall';

// data passed (videos) from view component in argument of function as props
// function VideoCard() {

// setDeletVideoStatus passing from view component(parent)
  // but we can destructute so
function VideoCard({displayVideo,setDeletVideoStatus,inside_category}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
// as handle include api call it becomesasync fn and new lnes are added
  // const handleShow = () => setShow(true);


    // adding to watch history when clicking on the video image
  // const handleShow = () => setShow(true);
  const handleShow = async() => {
    setShow(true)
    // getting caption and link of video for storage
    const {caption,embed_link}=displayVideo

    // getting time when watched
    let current_time=new Date()
    // format: Wed Oct 11 2023 08:58:38 GMT+0530 (India Standard Time)
    // console.log(current_date_time)


    const timeStamp=new Intl.DateTimeFormat("en-US",{
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",}).format(current_time)


  // video details to json
  const video_details_to_server={
    caption,embed_link,timeStamp
  }

  // API call for server storage of watch history
  await add_video_to_watch_history(video_details_to_server)

}

  



// deleting video api call from allAPI call file
  const removeVideo=async (id)=>{
    // making api call 
    const response= await delete_a_Video(id)
    console.log(response);
    setDeletVideoStatus(true)
  }

  //  to transfer video id to pass when video card id dropped into a category div
  const drag_started=(event,video_id)=>{
    console.log("drag started");
    console.log(event)
    event.dataTransfer.setData("cardId",video_id)
  }

  return (
    <>
     { 
     displayVideo &&
     /* <Card style={{ width: '18rem' }}>  to see the image in 100 div */
      <Card className="mb-3"  draggable onDragStart={(e)=>drag_started(e,displayVideo?.id)}>
        {/* classname added to show 4 different cards with space */}
        <Card.Img style={{height:'150px'}}
          onClick={handleShow}
          className="w-100"
          variant="top"
          src={displayVideo?.image_url}
        />
        <Card.Body style={{height:'50px'}}>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h6>{displayVideo?.caption}</h6>
            {/* <button><i class="fa-solid fa-trash" style={{color: "#820000;"}}></i></button> */}
            {
              inside_category?"":
              <button className="btn txt-danger" onClick={()=>removeVideo(displayVideo?.id)}>
              <i className="fa-solid fa-trash" style={{ color: "#FB0404" }}></i>
            </button>
            }
          </Card.Title>

          {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            // width="658" height="370"
            width={"100%"} height={"400px"}

            
            // src="https://www.youtube.com/embed/8pKjULHzs0s"
            // to make autoplay
             src={`${displayVideo?.embed_link}?autoplay=1`}
            title={displayVideo?.caption}
            // no frameborder property in jsx
            // frameborder="0"

            // autoplay woont work you should also give in src attribute as above ?autoplay=1
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen property present change to camalecase
            // allowfullscreen
            allowFullScreen>

            </iframe>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default VideoCard;
