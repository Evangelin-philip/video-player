import React,{useState,useEffect} from 'react';
import {Row,Col} from 'react-bootstrap';
import VideoCard from './VideoCard'
import { get_All_Videos } from '../services/allAPICall';



// ----------------------------------uploadVideoServerResponse satte from home destructured-------------------

function View({uploadVideoServerResponse}) {

//  STATE FOR DELETION -------------------------------------STATE LIFTING --------------------------------------
// status will be always boolen so false,, we can give "" also
const [deleteVideoStatus,setDeletVideoStatus]=useState(false)

  // state for holding all videos
  const [allVideos,setallVideos]=useState([])


  //  function to get all uploaded vvideos from json server
  //  so we need to call getallvideos() api so async and await
  const getAllUploadedVideos= async()=>{
        // const response=await get_All_Videos()
      const {data}=await get_All_Videos()
      //  now the dat variable inside this function not consolable outside this function so, we need to introduce a state allVideos
                      // console.log(data);
      setallVideos(data)
  }
  console.log("allVideos",allVideos)


  //  getAllUploadedVideos need to call when view component render for first time, so we need use useEffect, with a call back function calling getAllUploadedVideos() and dependency as []==only on first render
  useEffect(()=>{
    // in the begining deleteVideo state is false and then in videocard component value is true and useeffect works as value changed............
    // again when click delete , value is true nad in videocard component state chnaged to true ...no chnage hapen and no deletion
    // so while useeffect works everytime restting deletevideo state value to false
    setDeletVideoStatus(false)
    getAllUploadedVideos()
    //  now dependency was first time rendering =[], now we need to call the getAlluploadedVideo whenever the state value changes so in dependency we can pass state/props(uploadVideoServerResponse)
    // deleteVideoStatus also in dependency as it need to call getAllUploadedVideos() whenever delete status updates each ime 
  },[uploadVideoServerResponse,deleteVideoStatus])


  return (
    <Row>
      {/* <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard/>
      </Col> */}

{/* if allvideos have atleast 1 video */}
      {/* {allVideos.length>0?<Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard/>
      </Col>:<p className='fw-bolder fs-5 mt-5 text-danger'>No Videos uploaded yet</p>} */}

{/* need to display videos as cards */}
      {allVideos?.length>0?
      allVideos?.map(video=>(
        <Col sm={12} md={6} lg={4} xl={3} >
          {/* i need to set the respective video to videocard comp as props */}
          {/* on deletion we need to update deletstatus so sharing deletestatus update function of state to videoCrad(state lifting) */}
        <VideoCard displayVideo={video} setDeletVideoStatus={setDeletVideoStatus}/>
      </Col>)):<p className='fw-bolder fs-5 mt-5 text-danger'>No Videos uploaded yet !!!!!!!</p>}

      
    </Row>
  )
}

export default View

