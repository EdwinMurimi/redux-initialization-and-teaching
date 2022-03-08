import { GETTING_POSTS, GETTING_POSTS_SUCCESS, GETTING_POSTS_FAILED } from '../types';

const initialState = {posts: [], loading: true, errors: null};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETTING_POSTS:
      return {
          ...state
      };
    case GETTING_POSTS_SUCCESS:
      return {
          ...state,
          loading: false,
          posts: payload
      };
    case GETTING_POSTS_FAILED:
      return {
          ...state,
          loading: false,
          errors: payload
      };
    default:
      return state;
  }
};

export default postsReducer;