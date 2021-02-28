import {createSelector} from 'reselect'

import {ITEMS_PER_PAGE} from "../../constants/index.js"


const selectPosts = state => state.posts.posts


export const getPostsByPageNumber = createSelector(
    selectPosts,
    (_,pageNumber)=> pageNumber,
    (posts, number) => {
        //console.log({posts, number})
        return posts.slice(number*ITEMS_PER_PAGE, (number+1)*ITEMS_PER_PAGE)
    }
)

export const getPostsLength = createSelector(
    selectPosts,
    (posts) => posts.length
)

export const getPostById = createSelector(
    selectPosts,
    (_, postId) => postId,
    (posts, postId) => {
        console.log({posts, postId})
        let foundElement = posts.find((post) => post.id === postId)
        console.log(foundElement);
        return foundElement;
    }
)