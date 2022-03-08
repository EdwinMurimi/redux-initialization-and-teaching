import axios from "axios";
import { GETTING_POSTS, GETTING_POSTS_SUCCESS, GETTING_POSTS_FAILED } from "../types";

export const gettingPosts = () => {
    return {
        type: GETTING_POSTS
    }
}

export const gettingPostsSuccess = (posts) => {
    return {
        type: GETTING_POSTS_SUCCESS,
        payload: posts
    }
}

export const gettingPostsFailed = (error) => {
    return {
        type: GETTING_POSTS_FAILED,
        payload: error
    }
}

export const fetchingAllPosts = () => async (dispatch) => {
    dispatch(gettingPosts());
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => dispatch(gettingPostsSuccess(res.data)))
        .catch(error => dispatch(gettingPostsFailed(error.message)));
}
