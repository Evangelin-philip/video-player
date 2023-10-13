import axios from 'axios'

//function for common API callng
export const common_API_call=async (http_request_type,url,request_body)=>{

    // request configuration object type
    // https://axios-http.com/docs/req_config

    const request_config={
        method:http_request_type,
        url,
        data:request_body,
        headers: {
            'Content-Type': 'application/json'
          }
    }
// need to retuen await, results and errors to common_API_call varibale
    return await axios(request_config).then(
        (results)=>{
            return results
        }
    ).catch((error)=>{
        return error
    })

}