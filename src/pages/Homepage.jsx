import React,{useState} from 'react'
import Add from '../components/Add';
import View from '../components/View';
import Category from '../components/Category'
import{Link} from 'react-router-dom';
import{Row,Col} from 'react-bootstrap'

function Homepage() {

  // -------------------------------------------------------STATE LIFTING----------------------------------------------------------

  // state for serverResponse to add and view components
  const [uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})
  // uploadVideoServerResponse is the state that need to pass to view.js
  // setUploadVideoServerResponse passing to addEventListener.js for updating uploadVideoServerResponse


  return (
    <>
    
      <div className="container d-flex justify-content-between align-items-center mt-5 mb-5">
        <div className="add"> 
        {/* state update function to add.js */}
          <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
        </div>
        <Link to= {'/watch-history'} style={{textDecoration:'none',color:'white'}} className='fs-5'>Watch History</Link>
      </div>
      <Row className='container-fluid w-100'>
        <Col lg={8} className='all-videos' >
          <h3>All Videos</h3>
          <div className='videos w-100'>
            {/* state to view.js */}
            <View uploadVideoServerResponse={uploadVideoServerResponse}/>
            </div>
        </Col>
        <Col lg={4} className='category'>
          <Category/>
        </Col>
      </Row>
    </>
  )
}

export default Homepage
