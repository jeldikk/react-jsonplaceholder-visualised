import axios from 'axios';

export const fetchPostsData = async ()=>{

    let config = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
    }

    return axios(config);
    
}

export const fetchUsersData = async ()=>{
    let config = {
        method: 'GET',
        url: "https://jsonplaceholder.typicode.com/users"
    }

    let results = await axios(config)
    return results.data;
}

export const fetPostsByUserId = async function({userId}){
    const MAX_USERID = 10;
    try{
        if(typeof userId === 'number' && userId < MAX_USERID){
            throw new Error("userId Argument is fishy to parse")
        }
        let config = {
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/users/${userId}`
        }
    }
    catch(error){
        console.error("Error occured: ", error.message)
    }
    
}

export const fetchCommentsByPostId = async function(postId){
    
    try{
        let config = {
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        }

        let response = await axios(config)
        return response.data;
    }
    catch(err){
        console.error("Error occured while fetching comments data for postId", postId)
        // throw new Error(err.message)
    }
}
