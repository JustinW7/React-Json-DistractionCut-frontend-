import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'




function WatchHistory() {


const [history,setHistory]=useState([])
  const handleHistory=async ()=>{
    // api call 
    const {data}=await getAllHistory()
    setHistory(data);
   
  }
  console.log(history);


  useEffect(()=>{
    handleHistory()
  },[])


const handleDeleteHistory=async(id)=>{
  //make api call 
  await deleteHistory(id)

//return remaining history 
handleHistory()

}

  return (
<>
<div className="container mt-5 mb-5 d-flex justify-content-between">

  <h3>Watch-History</h3>
  <Link to={'/home'} style={{textDecoration:'none',fontSize:'20px',color:'blueviolet'}}><i class="fa-solid fa-arrow-left fa-beat"></i>

  Back to Home
  </Link>
<table className='table mt-5 mb-5 container'>
  <thead>
    <tr>
    <th>#</th>
    <th>Name</th>
    <th>URL</th>
    <th>Time Stamp </th>
    <th>Action</th>
    </tr>
  
  </thead>
  <tbody>
    {

      history.length>0?history?.map((item,index)=>(


        <tr key={item?.id}>
        <td>{index+1}</td>
        <td>{item?.caption}</td>
        <td><a href={item?.embedLink}target='_blank'>{item?.embedLink}</a></td>
        <td>{item?.timestamp}</td>
        <td><button onClick={()=>handleDeleteHistory(item?.id)}className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
        </tr>
      )):<p className='fw-bolder text-danger fs-5'>Nothing to display</p>
      }
  </tbody>
</table>


</div>
</>
  )
}

export default WatchHistory