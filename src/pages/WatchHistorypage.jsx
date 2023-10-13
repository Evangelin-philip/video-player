import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {get_watch_history_data,delete_watch_history} from '../services/allAPICall'


function WatchHistorypage() {
  // to get data from api call we need state
  // useState([]) is array we need in array
  const [watch_history_data,setwatch_history_data]=useState([])

  const get_History_data=async()=>{
    // const response=await get_watch_history_data()
    // console.log(response);
    const {data}=await get_watch_history_data()
    console.log(data);
    setwatch_history_data(data)
  }

console.log(watch_history_data);



  useEffect(()=>{
    get_History_data();
  },[])


  // To delete video on click of delete btn
  const delete_video= async(video_id)=>{
    console.log(video_id)
    await delete_watch_history(video_id)
    //  deleted fom json server
    // now need to call current watch history from server
    get_History_data()
  }



  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
      <h3>Watch History</h3>
      <Link to='/home' style={{textDecoration:'none'}}>
      <i className="fa-solid fa-arrow-left fa-beat" style={{color: "#FFFFFF"}}></i>{' '}
        <span style={{color:'#FFFFFF'}}>Back To Home</span>
        </Link>
    </div>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Time Stamp</th>
          <th></th>
          
          
        </tr>
      </thead>
      <tbody>
        
        {
         watch_history_data?.length>0?
          watch_history_data.map((item,index,array)=>(
          <tr>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            {/* target="_blank" means it will display on another tab */}
            <td><a href={item?.embed_link} target="_blank">{item?.embed_link}</a></td>
            <td>{item.timeStamp}</td> 
            <td><button className='btn' onClick={()=>delete_video(item?.id)} ><i className="fa-solid fa-trash text-danger "></i></button></td>
          </tr>
          )):<p className='fw-bolder fs-5 mt-5 text-danger'>Watch History Empty !!!!!!!</p>}
        
      </tbody>
    </Table>
      
    </>
  )
}

export default WatchHistorypage
