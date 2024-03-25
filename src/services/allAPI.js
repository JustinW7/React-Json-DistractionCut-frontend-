import {commonAPI} from "./commonAPI";
import {serverUrl} from "./serverUrl";

// upload video 

export const uploadVideo=async(reqBody)=>{
  // make POST http request "http://localhost:4000/videos" to add videos to the json server return response to the add Component 

  return await commonAPI("POST", `${serverUrl}/videos`,reqBody)
}

//get all videos from json 
export const getAllVideo=async()=>{
  //make POST http request "http://localhost:4000/videos" to get all videos from json-server return response to the view Component 
  return await commonAPI("GET",`${serverUrl}/videos`,"")
}


// get a single video 
export const getAVideo=async(id)=>{
  // 

  return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")
}

// delete a video 
export const deleteAVideo=async(id)=>{
  //make GET http request to "http://localhost:4000/videos" to delete videos from json-server return response to the video card component 

  return await commonAPI("DELETE", `${serverUrl}/videos/${id}`,{})
}


//store watching video history  to json server 

export const addToHistory=async(videoDetails)=>{
//make POST http request "http://localhost:4000/history" to store videos to the json-server return response to the video card component 

  return await commonAPI("POST", `${serverUrl}/history`,videoDetails)
}
//get watching video history to json server 
export const getAllHistory=async()=>{
  //make POST http request "http://localhost:4000/history" to store vidoes to the json-server return response to the video card component 
  
    return await commonAPI("GET", `${serverUrl}/history`,"")
  }
//add to category to json server 
  export const addToCategory=async(videoDetails)=>{
    

    return await commonAPI("POST", `${serverUrl}/categories`,videoDetails)
  }

  // get all category from json server 
  export const getAllCategory=async(videoDetails)=>{
    

    return await commonAPI("GET", `${serverUrl}/categories`,"")
  }
  //delete 
  export const deleteCategory=async(id)=>{
    

    return await commonAPI("DELETE", `${serverUrl}/categories/${id}`,{})
  }

//update a category from json server 
  export const updateCategory=async (id,body)=>{
//make PUT http request 

    return await commonAPI("PUT",`${serverUrl}/categories/${id}`,body)
  }

  // delete history 

  export const deleteHistory=async(id)=>{
    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{})
  }