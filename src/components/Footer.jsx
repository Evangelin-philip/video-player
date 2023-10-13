import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column w-100' style={{height:"300px"}}>
      <div className="footer-contents d-flex justify-content-evenly  w-100">
        <div className="website-details" style={{width:"300px"}}>
            <div className='d-flex flex-row align-items-center' >
                <i className="fa-solid fa-cloud-arrow-up fa-bounce fa-xl" style={{color: "#FFFFFF"}}></i>{' '}
                <h4 className='text-warning'>Video Player</h4>
            </div>
                <div>
                    <h6>Designed with all love in the world by luminar team with the help of our contribution </h6>
                    <h6>code linenced Luminar, docs CC BY 3.0.0</h6>
                    <h6>currently V1.0.0</h6>
                </div>
        </div>
        <div className="links d-flex  flex-column">
            <h4>Links</h4>
            <Link to='/' style={{textDecoration:"none",color:"white"}}>Landing Page</Link>
            <Link to='/home' style={{textDecoration:"none",color:"white"}}>Home</Link>
            <Link to='/watch-history' style={{textDecoration:"none",color:"white"}}>Watch History</Link>
        </div>
        <div className="guides d-flex  flex-column">
            <h4>Guides</h4>
            <Link to='https://react.dev/' style={{textDecoration:"none",color:"white"}}>React</Link>
            <Link to='https://react-bootstrap.github.io' style={{textDecoration:"none",color:"white"}}>React Bootstrap</Link>
            <Link to='https://reactrouter.com/en/main' style={{textDecoration:"none",color:"white"}}>Routing</Link>
        </div>
        <div className="contacts d-flex  flex-column">
            <h4>Contacts</h4>
            <p>
                <input type="email" placeholder='Enter Your Email'></input>
                <Button variant="primary" style={{height:"27px"}}>
                <i className="fa-solid fa-arrow-right fa-beat" style={{color:"#FFFFFF"}}></i>
                  </Button>{' '}
            </p>
            <Link to='https://github.com/' style={{textDecoration:"none",color:"white"}}>Git Hub</Link>
            <Link to='https://www.netlify.com/' style={{textDecoration:"none",color:"white"}}>netlify</Link>
        </div>
      </div>
      <p>All Rights Reserved @ Media Player</p>
    </div>
  )
}

export default Footer
