import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'





function Home() {

  const [uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})
  return (
    <>


      <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
        <div className='add-videos'>


          <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
        </div>


        <Link to={'/watchhistory'}style={{textDecoration:'none',color:'white',fontSize:'20px'}}>Watch History</Link>
      </div>

      <div className="container-fluid w-100 mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="all-videos col-lg-9">

          <h3>All-Videos</h3>

          <View uploadVideoServerResponse={uploadVideoServerResponse}/>
        </div>
        <div className="category col-lg-4">
          <Category/>
        </div>
      </div>

    </>
  )
}

export default Home