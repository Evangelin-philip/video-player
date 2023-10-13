import { common_API_call } from "./commonAPI"
import { server_url } from "./serverURL"


// API call_1 --------------------------------------------------------------- uploading Video
export const upload_Video= async (body)=>{
    //  call post http request to http://localhost:4000/videos  to add video in json server returns response to Add Components
    return await common_API_call("POST",`${server_url}/videos`,body)
}


// API CALL 2---------------------------------------------------------------------- get all Videos 

export const get_All_Videos= async ()=>{
    //  call GET http request to http://localhost:4000/videos  to get video from json server returns response to view  Components
    return await common_API_call("GET",`${server_url}/videos`,"")
}


// API CALL 3---------------------------------------------------------------------- get a single video selected from video cards displayed 
export const get_a_Video= async (video_id)=>{
    //  call GET http request to http://localhost:4000/videos/id  to get video from json server returns response to videocard  Components
    return await common_API_call("GET",`${server_url}/videos/${video_id}`,"")
}



// API CALL 4-------------------------------------------------------------------- delete a single video when delete button pressed in video cards displayed 
export const delete_a_Video= async (video_id)=>{
    //  call DELETE http request to http://localhost:4000/videos/id  to remove video from json server returns response to videocard  Components
    return await common_API_call("DELETE",`${server_url}/videos/${video_id}`,{})
}















// -------------------------------------------WATCH HISTORY API CALLS---------------------------------------------------------
// API call_5 --------------------------------------------------------------- watch hitory Video storing 
export const add_video_to_watch_history= async (video_history)=>{
    //  call post http request to http://localhost:4000/history  to add watched video in json server returns response to videocard Components
    return await common_API_call("POST",`${server_url}/history`,video_history)
}


// API call_6 --------------------------------------------------------------- To get watch hitory Video stored
export const get_watch_history_data= async ()=>{
    //  call GET http request to http://localhost:4000/history/id to get all vidoes watched from json server returns response to history Components
    return await common_API_call("GET",`${server_url}/history`,"")
}

// API call_6 --------------------------------------------------------------- To delete watch hitory Video when delete btn clicked
export const delete_watch_history= async (video_id)=>{
    //  call delete  http request to http://localhost:4000/history  to delete  video from json server when dlete btn is clicked on watch history list returns response to history Components
    return await common_API_call("DELETE",`${server_url}/history/${video_id}`,{})
}















// ---------------------------------------------CATEGORY Adding API CALLS---------------------------------------------------------
// API call_7 --------------------------- category addding 
export const add_category= async (category_data)=>{
    //  call post http request to http://localhost:4000/cateogories  to add category  in json server returns response to category Components
    // this api calling from category component
    return await common_API_call("POST",`${server_url}/cateogories`,category_data)
}

// API call_6 --------------------------------------------------------------- To get categoery data stored in json server
export const get_category_data=async()=>{
    //  call GET http request to http://localhost:4000/cateogories  to get all categories added to json server, returns response to category Components
    return await common_API_call("GET",`${server_url}/cateogories`,"")
}

// API CALL_7-------------------------------------------------------------------- delete a single category when delete button pressed in category list displayed in category component
export const delete_a_category= async (category_id)=>{
    //  call DELETE http request to http://localhost:4000/cateogories  to remove category from json server returns response to category  Components
    return await common_API_call("DELETE",`${server_url}/cateogories/${category_id}`,{})
}

// API CALL_8-----------------------------------------------------updating a category when data dragged into it--------------- 
export const update_a_Category=async(category_id,data)=>{
    return await common_API_call("PUT",`${server_url}/cateogories/${category_id}`,data)
}


