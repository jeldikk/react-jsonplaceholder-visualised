import PostsActionTypes from "./posts.types"

import {fetchPostsData} from "../../axios/axios.util"

export const setPosts = (posts) => {
    return {
        type: PostsActionTypes.SET_POSTS,
        payload: posts
    }
}

export const fetchPosts = () =>{

    return async (dispatch)=>{

        let result = await fetchPostsData();

        console.log(result);
        dispatch(setPosts(result.data))
    }
}