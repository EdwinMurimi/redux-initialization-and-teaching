import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchingAllPosts } from "../redux/actions/postsActions";

function FirstComponent() {
    const dispatch = useDispatch();
    const {posts: { posts, loading, errors }} = useSelector(state => state);

    useEffect(() => {

        const unsubscribe = dispatch(fetchingAllPosts);
        return unsubscribe;

    }, [dispatch, posts]);

  return (
    <div>
        {loading && <h1>loadding...</h1>}
        {errors && <h1>Ooops! something went bad...</h1>}
        {posts && posts.map((post, index) => <h1 key={index}>{ post.title }</h1>)}
    </div>
  )
}

export default FirstComponent